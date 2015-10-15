
var DeveloperPage = React.createClass({
    getInitialState: function () {
        return {
        alertMessage: null,
        alertType: null
      };
    },
    navigateToPage: function(page,user){
        this.props.appStateLink(page, user);
    },
    setAlertBar: function (alertType, message) {
        this.setState({
            alertMessage : message,
            alertType : alertType
        });
    },
    pullChanges: function(){
        var comp = this;

        $.ajax({
            url: "/repo",
            type: 'GET',
            success: function(response) {
                console.log(response);
                if(response == 'success'){
                    comp.setAlertBar("alert alert-success", "You now have the latest version of the website!");
                } else {
                    comp.setAlertBar("alert alert-danger", "An error occured, you may have uncommitted changes!");
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    },
    commitChanges: function(){
        var comp = this;
        var message = this.refs.message.getDOMNode().value;
        var fullMessage = this.props.user + ":" + message;

        if(message && confirm("Are you sure")){
            $.ajax({
                url: "/repo",
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify({ "message": fullMessage }),
                success: function(response) {
                    console.log(response);
                    if(response == 'success'){
                        comp.setAlertBar("alert alert-success", "Your changes have been successfully committed! " + message);
                        comp.refs.message.getDOMNode().value = '';
                    } else {
                        comp.setAlertBar("alert alert-danger", "An error occurred! (Did you actually make any changes?)");
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        } else {
            this.setAlertBar("alert alert-info", "Please enter a commit message");
        }
    },
    discardChanges: function(){
        var comp = this;

        if(confirm("Are you sure you want to discard your local changes")){
            $.ajax({
                url: "/discardChanges",
                type: 'GET',
                success: function(response) {
                    console.log(response);
                    if(response == 'success'){
                        comp.setAlertBar("alert alert-success", "Changes discarded, you now have the latest version of the website!");
                    } else {
                        comp.setAlertBar("alert alert-danger", "An error occured");
                    }
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    },
    render: function(){
        var alertBar;
        if(this.state.alertMessage && this.state.alertType){
            alertBar = (
                <div className={this.state.alertType}>
                    {this.state.alertMessage}
                </div>
            );
        } else {
            alertBar = <div></div>;
        }

        return(
            <div>
                {alertBar}
                <h2>TEAM {this.props.team}</h2>
    			<h2>All your work and changes will be saved under this code name: <b>{this.props.user}</b></h2>
                <br/>
    			<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#findCodeModal">Where's the code?</button>
                <FindCodeModal />

    			<h3>When you've finished a piece of work, and are ready to send it to the server:</h3>
    			<p>Describe what you've done in a short message i.e. "Created a really cool new page"
    			and press the button!</p>
				<input type="text" className="form-control" ref="message" placeholder="Describe the changes you've made..." />
                <br />
				<button className="btn btn-primary btn-lg" onClick={this.commitChanges}>Add to the Codebase!</button>

                <h3>To get the latest version of the website commited by your team click below!</h3>
                <p>Make sure that you get the latest version of the website before you start <b>each </b>
                    new task or your changes may conflict with your team members changes!</p>
                <button className="btn btn-success btn-lg" onClick={this.pullChanges}>Get latest changes</button>

                <h3>Discard local changes and revert!</h3>
                <p>Discard your changes made since your last commit to the codebase, and revert to the latest version of the site!</p>
                <button className="btn btn-warning btn-lg" onClick={this.discardChanges}>Revert changes</button>
                <br />
                <br />
                <br />
                <br />
                <button className="btn btn-danger btn-lg" onClick={this.navigateToPage.bind(null,'developer',null)}>Back</button>
            </div>
        );
    }
});

var FindCodeModal = React.createClass({
    render: function(){
        return(
        <div id="findCodeModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Where's the code?</h4>
              </div>
              <div className="modal-body">
                <h4>Open 'Finder' by clicking on this icon at the bottom of the screen:</h4>
                <img src="images/finder-icon.png" height="100" width="100"></img>
                <br />
                <h4>Find the folder named 'sky-news-exercise', double click and find the folder named 'web':</h4>
                <img src="images/folder-icon.jpg" height="100" width="100"></img>
                <br />
                <h4>Click and drag the whole folder to this icon at the bottom of the screen:</h4>
                <img src="images/atom-icon.png" height="100" width="100"></img>
              </div>
              <div className="modal-footer">
                <button className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
});
