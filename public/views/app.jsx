
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

        return <Element appStateLink={appStateLink} user={this.state.user} team={this.state.team}/>;
    }

});

React.render(<App/>, document.getElementById("content"));
