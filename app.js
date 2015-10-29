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
    var response = 'false';
    var repoUrl;

    switch(req.query.team){
        case "A":
            repoUrl = "git@github.com:SkyCareersLab/sky-news-exercise1.git";
            break;
        case "B":
            repoUrl = "git@github.com:SkyCareersLab/sky-news-exercise2.git";
            break;
        case "C":
            repoUrl = "git@github.com:SkyCareersLab/sky-news-exercise3.git";
            break;
        case "D":
            repoUrl = "git@github.com:SkyCareersLab/sky-news-exercise4.git";
            break;
    }

    exec('./public/gitScripts/cloneRepo.sh ' + repoUrl, function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            response = 'success';
        }
        res.end(response);
    });
});

app.get('/repo', function (req, res) {
    var response = 'false';
    exec('./public/gitScripts/pull.sh', function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            response = 'success';
        }
        res.end(response);
    });
});

app.post('/repo', function (req, res) {
    var response = 'false';

    exec('./public/gitScripts/push.sh ' + req.body.message ,function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            response = 'success';
        }
        res.end(response);
    });
});

app.get('/discardChanges', function (req, res) {
    var response = 'false';
    exec('./public/gitScripts/revert.sh', function(error) {
        if (error !== null) {
            console.log('exec error: ' + error);
        } else {
            response = 'success';
        }
        res.end(response);
    });
});

var server = app.listen(3001, function () {
    var port = server.address().port;
    console.log('listening on port:' + port);
    console.log('Go to "localhost:3001" in your favourite browser!');
});
