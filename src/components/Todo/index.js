import React from 'react';
import TodoStore from '../../stores/TodoStore';
import ActionCreator from '../../actions/TodoActionCreator';

import styles from './todo.css';

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
	addTodo(e) {
		e.preventDefault();
		var title = this.refs.title.getDOMNode().value;
		ActionCreator.addTodo(title);

		this.refs.addForm.getDOMNode().reset();
	},
	toggleDone(taskId) {
		ActionCreator.toggleDone(taskId);
	},
	render() {
		if(this.state.error) {
			return <div>There was an error</div>
		}

		return <div className={styles.todo}>
			<form ref='addForm' onSubmit={this.addTodo}>
				<input type='text' ref='title' /><input type='submit' value='Add' className={styles.hidden} />
			</form>
			<ul>
				{this.state.todos.map((item, ind) => {
					return <li key={ind} onClick={this.toggleDone.bind(this, item.id)}>{item.done ? "DONE" : ""} {item.title}</li>
				})}
			</ul>
		</div>
	}
});
