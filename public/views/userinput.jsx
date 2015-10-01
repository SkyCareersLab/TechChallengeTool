
var UserInputPage = React.createClass({
    getUsername: function(){
        var user1 = this.refs.firstUser.getDOMNode().value.trim();
        var user2 = this.refs.secondUser.getDOMNode().value.trim();

        if(user1 && user2){
            this.navigateToPage('developer', user1 + user2);
        } else {
            alert('Please enter both of your usernames');
        }
    },
    navigateToPage: function(page,user){
        this.props.appStateLink(page, user);
    },
    render: function() {
        return(
            <div>
                <h1>Ready? - Fill in your usernames and click submit!</h1>
    			<br />
				<div className="form-group">
					<label>First Team Mate's Username:</label>
					<input type="text" className="form-control" ref="firstUser"/>
				</div>
				<div className="form-group">
					<label>Second Team Mate's Username:</label>
					<input type="text" className="form-control" ref="secondUser"/>
				</div>
				<button className="btn btn-primary pull-right" onClick={this.getUsername}>Submit!</button>
                <button className="btn btn-danger btn-lg" onClick={this.navigateToPage.bind(null,'warmup',null)}>Back</button>
            </div>
        );
    }
});
