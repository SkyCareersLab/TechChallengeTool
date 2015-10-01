
var HomePage = React.createClass({
    navigateToPage: function(page,user){
            this.props.appStateLink(page, user);
    },
    downloadExercise: function() {
        var comp = this;
        $.ajax({
            url: "/download",
            type: 'GET',
            success: function(response) {
                if(response == 'success'){
                    console.log('sky-news-exercise was successfully downloaded');
                    comp.navigateToPage('warmup', null);
                } else {
                    alert('Error: sky-news-exercise was unable to download');
                }
            },
            error: function(err) {
                console.log('Error: ' + err);
            }
        });
    },
    render: function(){
        return(
            <div>
                <h1>Welcome to Sky Academy Careers Lab!</h1>
    			<br />
    			<div className="row">
    				<div className="col-md-6">
                        <button className="btn btn-info btn-lg" onClick={this.downloadExercise}>Begin!</button>
                    </div>
    			</div>
            </div>
        );
    }
});
