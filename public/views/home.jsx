
var HomePage = React.createClass({
    navigateToPage: function(page){
            this.props.appStateLink(page, null);
    },
    render: function(){
        return(
            <div>
                <h1>Welcome to Sky Academy Careers Lab!</h1>
    			<br />
    			<div className="row">
    				<div className="col-md-6">
                        <button className="btn btn-info btn-lg" onClick={this.navigateToPage.bind(null, 'developer')}>Begin!</button>
                    </div>
    			</div>
            </div>
        );
    }
});
