
var App = React.createClass({

    getInitialState: function () {
        return {
        page: 'home',
        user: null
      };
    },
    render: function() {
        var comp = this;
        var appStateLink = function(page, user) {
            comp.setState({page: page, user: user});
        };
        var Element;

        if(this.state.page == 'home'){
            Element = HomePage;
        } else if(this.state.page == 'developer' && !this.state.user){
            Element = UserInputPage;
        } else if(this.state.page == 'developer' && this.state.user){
            Element = DeveloperPage;
        }

        return <Element appStateLink={appStateLink} user={this.state.user}/>;
    }

});

React.render(<App/>, document.getElementById("content"));
