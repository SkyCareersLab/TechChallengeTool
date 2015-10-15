
var App = React.createClass({

    getInitialState: function () {
        return {
        page: 'home',
        team: null,
        user: null
      };
    },
    render: function() {
        var comp = this;
        var appStateLink = function(page, user, team) {
            comp.setState({page: page, user: user});
            if(team){
                comp.setState({team: team});
            }
        };
        var Element;

        if(this.state.page == 'home'){
            Element = HomePage;
        } else if(this.state.page == 'warmup' && !this.state.user){
            Element = WarmupPage;
        } else if(this.state.page == 'developer' && !this.state.user){
            Element = UserInputPage;
        } else if(this.state.page == 'developer' && this.state.user){
            Element = DeveloperPage;
        }

        var team;
        switch(this.state.team){
            case "A":
                team = <div className="team-logo red pull-right">Team A</div>;
                break;
            case "B":
                team = <div className="team-logo blue pull-right">Team B</div>;
                break;
            case "C":
                team = <div className="team-logo green pull-right">Team C</div>;
                break;
            case "D":
                team = <div className="team-logo yellow pull-right">Team D</div>;
                break;
        }

        return (<div>
                    <img src="images/sky_academy_logo.png" />
                    {team}
                    <br/>
                    <br/>
                    <Element appStateLink={appStateLink} user={this.state.user} team={this.state.team}/>
                </div>);
    }
});

React.render(<App/>, document.getElementById("content"));
