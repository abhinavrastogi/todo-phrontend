import React from 'react';
import cx from 'classnames';

import styles from './Filters.css';

export default React.createClass({
	render() {
		let allClasses = {};
		let completedClasses = {};
		let pendingClasses = {};

		allClasses[styles.selected] = this.props.selected === 'all';
		completedClasses[styles.selected] = this.props.selected === 'completed';
		pendingClasses[styles.selected] = this.props.selected === 'pending';

		return <div className={styles.filters}>
			<ul className={styles.list}>
				<li className={cx(styles.item, allClasses)} onClick={this.props.setFilter.bind(null, 'all')}>All</li>
				<li className={cx(styles.item, completedClasses)} onClick={this.props.setFilter.bind(null, 'completed')}>Completed</li>
				<li className={cx(styles.item, pendingClasses)} onClick={this.props.setFilter.bind(null, 'pending')}>Pending</li>
			</ul>
		</div>
	}
});
