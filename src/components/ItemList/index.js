import React from 'react';
import TodoItem from '../TodoItem';

import styles from './ItemList.css';

export default React.createClass({
	render() {
		return <ul className={styles.list}>
			{this.props.todos.map((item, ind) => {
				return <TodoItem key={ind} data={item} />;
			})}
		</ul>
	}
});
