
var UserInputPage = React.createClass({
    getUsername: function(){
        var user1 = this.refs.firstUser.getDOMNode().value.trim();
        var user2 = this.refs.secondUser.getDOMNode().value.trim();

        if(user1 && user2){
            return(user1 + user2);
        } else {
            alert('Please enter both of your usernames');
            return(null);
        }
    },
    navigateToPage: function(page,user){
        this.props.appStateLink(page, user);
    },
    downloadExercise: function() {
        var comp = this;
        $.ajax({
            url: "/download",
            type: 'GET',
            success: function(downloaded) {
                if(downloaded == 'true'){
                    console.log('SkyNewsExercise was successfully downloaded');
                    var user = comp.getUsername();
                    if(user){
                        comp.navigateToPage('developer', user);
                    }
                } else {
                    alert('Error: SkyNewsExercise was unable to download');
                }
            },
            error: function(err) {
                console.log('Error: ' + err);
            }
        });
    },
    render: function() {
        return(
            <div>
                <h1>Ready? - Fill in your usernames and click download the code to start!</h1>
    			<br />
				<div className="form-group">
					<label>First Team Mate's Username:</label>
					<input type="text" className="form-control" ref="firstUser"/>
				</div>
				<div className="form-group">
					<label>Second Team Mate's Username:</label>
					<input type="text" className="form-control" ref="secondUser"/>
				</div>
				<button className="btn btn-primary" onClick={this.downloadExercise}>Submit!</button>
                <button className="btn btn-danger pull-right" onClick={this.navigateToPage.bind(null,'home',null)}>Back</button>
            </div>
        );
    }
});
