
var HomePage = React.createClass({
    getInitialState: function(){
        return {
        team: null,
        buttonText: 'Begin!'
      };
    },
    setTeam: function(){
        this.setState({team : this.refs.teamSelect.getDOMNode().value});
    },
    navigateToPage: function(page,user,team){
        this.props.appStateLink(page, user, team);
    },
    downloadExercise: function() {
        var comp = this;
        if(this.state.team){
            this.setState({buttonText : "Loading..."});
            var params = {"team" : this.state.team};

            $.ajax({
                url: "/download",
                type: 'GET',
                data: params,
                success: function(response) {
                    if(response == 'success'){
                        console.log('sky-news-exercise was successfully downloaded');
                        comp.navigateToPage('warmup', null, comp.state.team);
                    } else {
                        alert('Error: sky-news-exercise was unable to download');
                    }
                },
                error: function(err) {
                    console.log('Error: ' + err);
                }
            });
        } else {
            alert("Please select your team before proceeding!");
        }
    },
    render: function(){
        return(
            <div>
                <h1>Welcome to Sky Academy Careers Lab!</h1>
    			<br />
                <h3>Which team are you on?</h3>
                <select className="form-control" ref="teamSelect" onChange={this.setTeam}>
                    <option value="">Please select your team</option>
                    <option value="A">Team A</option>
                    <option value="B">Team B</option>
                    <option value="C">Team C</option>
                    <option value="D">Team D</option>
                </select>
                <br />
                <button className="btn btn-info btn-lg pull-right" onClick={this.downloadExercise}>{this.state.buttonText}</button>
            </div>
        );
    }
});
