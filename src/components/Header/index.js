import React from 'react';

export default React.createClass({
	render() {
		return <div>
			<h1>Todo App</h1>
			{this.props.children}
		</div>
	}
});
