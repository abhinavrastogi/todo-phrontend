import React from 'react';
import cx from 'classnames';

import ActionCreator from '../../actions/TodoActionCreator';

import styles from './TodoItem.css';

export default React.createClass({
	toggleDone(taskId) {
		ActionCreator.toggleDone(taskId);
	},
	render() {
		var itemClasses = {};
		itemClasses[styles.done] = this.props.data.done;

		return <li className={cx(styles.item, itemClasses)}>
			<span className={styles.doneTick} onClick={this.toggleDone.bind(this, this.props.data.id)}>&#10004;</span> <span className={styles.title}>{this.props.data.title}</span>
		</li>
	}
});
