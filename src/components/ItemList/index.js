import React from 'react';
import TodoItem from '../TodoItem';

import styles from './ItemList.css';

export default React.createClass({
	render() {
		return <ul className={styles.list}>
			{this.props.todos.map((item, ind) => {
				if(item.done) {
					if(this.props.show == 'all' || this.props.show == 'completed') {
						return <TodoItem key={ind} data={item} />;
					}
				} else if(this.props.show == 'all' || this.props.show == 'pending') {
					return <TodoItem key={ind} data={item} />;
				}
			})}
		</ul>
	}
});
