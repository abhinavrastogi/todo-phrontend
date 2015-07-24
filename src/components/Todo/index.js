import React from 'react';
import TodoStore from '../../stores/TodoStore';

export default React.createClass({
	getInitialState() {
		return {
			loading: true,
			error: false
		}
	},
	componentWillMount() {
		TodoStore.subscribe(this.change, this.error);
	},
	change() {
		this.setState(TodoStore.get());
	},
	error() {
		this.setState({
			error: true
		})
	},
	render() {
		if(this.state.error) {
			return <div>There was an error</div>
		}

		if(this.state.loading) {
			return <div>Loading...</div>
		}

		return <div>
			<ul>
				{this.state.todos.map(function(item) {
					return <li>{item}</li>
				})}
			</ul>
			<input type='text' /><input type='button' value='Add' />
		</div>
	}
});
