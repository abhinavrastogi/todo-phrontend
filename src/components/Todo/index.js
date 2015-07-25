import React from 'react';
import TodoStore from '../../stores/TodoStore';
import ActionCreator from '../../actions/TodoActionCreator';

export default React.createClass({
	getInitialState() {
		return {
			todos: [],
			error: false
		}
	},
	componentWillMount() {
		TodoStore.subscribe(this.change, this.error);
	},
	change() {
		this.setState({todos: TodoStore.get()});
	},
	error() {
		this.setState({
			error: true
		})
	},
	addTodo() {
		var title = this.refs.title.getDOMNode().value;
		ActionCreator.addTodo(title);

		this.refs.addForm.getDOMNode().reset();
	},
	render() {
		if(this.state.error) {
			return <div>There was an error</div>
		}

		return <div>
			<ul>
				{this.state.todos.map(function(item, ind) {
					return <li key={ind}>{item.title}</li>
				})}
			</ul>
			<form ref='addForm'>
				<input type='text' ref='title' /><input type='button' value='Add' onClick={this.addTodo} />
			</form>
		</div>
	}
});
