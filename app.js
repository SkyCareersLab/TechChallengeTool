var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var exec = require('child_process').exec;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname , '/public/index.html'));
});

app.get('/download', function (req, res) {
    var success = 'false';
    exec('./public/gitScripts/cloneRepo.sh', function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            success = 'true';
        }
        res.end(success);
    });
});

app.get('/repo', function (req, res) {
    var success = 'false';
    exec('./public/gitScripts/pull.sh', function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            success = 'true';
        }
        res.end(success);
    });
});

app.post('/repo', function (req, res) {
    var success = 'false';
    console.log(req.body.message);

    exec('./public/gitScripts/push.sh ' + req.body.message ,function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            success = 'true';
        }
        res.end(success);
    });
});


var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log('listening on port:' + port);
});
