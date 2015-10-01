
var WarmupPage = React.createClass({
    componentDidMount: function(){
        this.refs.warmupModal.getDOMNode().click();
    },
    navigateToPage: function(page,user){
        this.props.appStateLink(page, user);
    },
    render: function(){
        return(
            <div>
                <br />
                <button type="button" ref="warmupModal" className="btn btn-warning btn-lg" data-toggle="modal" data-target="#warmupModal">Warm-up task instructions</button>
                <h3>Start off by completing the warm-up exercise to get used to writing HTML code</h3>
                <br />
                <WarmupModal />
                <br />
                <button className="btn btn-danger btn-lg" onClick={this.navigateToPage.bind(null,'home',null)}>Back</button>
                <button className="btn btn-success btn-lg pull-right" onClick={this.navigateToPage.bind(null,'developer',null)}>next</button>
            </div>
        );
    }
});

var WarmupModal = React.createClass({
    render: function(){
        return(
        <div id="warmupModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Warm-up task</h4>
              </div>
              <div className="modal-body">
                <h4>Try to complete the warm-up tasks before starting on the main sky news site:</h4>
                <img src="images/atom-icon.png" height="100" width="100"></img>
                <br />
                <h4>Find the 'warm-up-exercise' folder in the sky-news-exercise
                    project which is now open in Atom and read the 'instructions.txt' file to get started!</h4>
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
