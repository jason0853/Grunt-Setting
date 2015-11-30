var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({
	render: function() {
		return (			
			<div>
				<h1>Hello World.</h1>
			</div>
		);
	}

});

ReactDOM.render(<Test />, document.getElementById('reactControl'));

