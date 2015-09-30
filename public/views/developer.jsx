
var DeveloperPage = React.createClass({
    getInitialState: function () {
        return {
        alertMessage: null,
        alertType: null
      };
    },
    setAlertBar: function (alertType, message) {
        this.setState({
            alertMessage : message,
            alertType : alertType
        });
    },
    commitChanges: function(){
        var comp = this;
        var message = this.props.user + ":" + this.refs.message.getDOMNode().value;

        if(confirm("Are you sure")){
            $.ajax({
                url: "/repo",
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify({ "message": message }),
                dataType: 'json',
                success: function(successful) {
                    if(successful){
                        comp.setAlertBar("alert alert-success", "Your changes have been successfully committed! " + message);
                        comp.refs.message.getDOMNode().value = '';
                    } else {
                        comp.setAlertBar("alert alert-danger", "An error occured, your changes were not committed!" + message);
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
    			<h2>All your work and changes will be saved under this code name: <b>{this.props.user}</b></h2>

    			<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Where's the code?</button>
                <ModalWindow />

    			<h3>When you've finished a piece of work, and are ready to send it to the server:</h3>
    			<p>Describe what you've done in a short message i.e. "Created a really cool new page"
    			and press the button!</p>
    			<br />
				<input type="text" className="form-control" ref="message" placeholder="Describe the changes you've made..." />
                <br />
				<button className="btn btn-primary btn-lg" onClick={this.commitChanges}>Add to the Codebase!</button>
            </div>
        );
    }
});

var ModalWindow = React.createClass({
    render: function(){
        return(
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Where's the code?</h4>
              </div>
              <div className="modal-body">
                <div id="text-center"><h5>Open 'Finder' by clicking on this icon at the bottom of the screen:</h5>
                    <img src="images/finder-icon.png" height="100" width="100"></img>
                </div>
                <br />
                <h5>Find the folder named 'SkyNewsExercise', double click and find the folder named 'web':</h5>
                <img src="images/folder-icon.jpg" height="100" width="100"></img>
                <br />
                <h5>Click and drag the whole folder to this icon at the bottom of the screen:</h5>
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
