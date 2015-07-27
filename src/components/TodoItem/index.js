import React from 'react';
import cx from 'classnames';

import ActionCreator from '../../actions/TodoActionCreator';

import styles from './TodoItem.css';

export default React.createClass({
	toggleDone(taskId) {
		ActionCreator.toggleDone(taskId);
	},
	deleteTodo(taskId) {
		ActionCreator.deleteTodo(taskId);
	},
	render() {
		var itemClasses = {};
		itemClasses[styles.done] = this.props.data.done;

		return <li className={cx(styles.item, itemClasses)}>
			<div className={styles.doneTick} onClick={this.toggleDone.bind(this, this.props.data.id)}>&#10004;</div> <div className={styles.title}>{this.props.data.title}</div>
			<div className={styles.remove} onClick={this.deleteTodo.bind(this, this.props.data.id)}>delete</div>
		</li>
	}
});
