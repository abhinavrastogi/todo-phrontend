import React from 'react';
import ActionCreator from '../../actions/TodoActionCreator';

import styles from './TodoTextInput.css';

export default React.createClass({
	addTodo(e) {
		e.preventDefault();
		var title = this.refs.title.getDOMNode().value;
		ActionCreator.addTodo(title);

		this.refs.addForm.getDOMNode().reset();
	},
	render() {
		return <form ref='addForm' onSubmit={this.addTodo}>
			<input type='text' ref='title' placeholder='What needs to be done?' className={styles.input} /><input type='submit' value='Add' className={styles.hidden} />
		</form>
	}
});
