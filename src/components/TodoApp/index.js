import React from 'react';
import cx from 'classnames';
import TodoStore from '../../stores/TodoStore';
import ActionCreator from '../../actions/TodoActionCreator';

import Header from '../Header';
import TodoTextInput from '../TodoTextInput';
import ItemList from '../ItemList';
import TodoItem from '../TodoItem';

import styles from './todoapp.css';

export default React.createClass({
	getInitialState() {
		return {
			todos: [],
			completed: 0,
			remaining: 0,
			error: false
		}
	},
	componentWillMount() {
		TodoStore.subscribe(this.change, this.error);
	},
	change() {
		var todos = TodoStore.get();
		var completed = todos.reduce(function(a, item) { return item.done ? ++a : a; }, 0);

		this.setState({
			todos: todos,
			completed: completed,
			remaining: todos.length - completed
		});
	},
	error() {
		this.setState({ error: true });
	},
	render() {
		if(this.state.error) {
			return <div>There was an error</div>
		}

		return <div className={styles.todoapp}>
			<Header>
				<TodoTextInput />
			</Header>
			<ItemList todos={this.state.todos} />
			<div>{this.state.remaining} items pending</div>
		</div>
	}
});
