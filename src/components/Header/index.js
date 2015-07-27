import React from 'react';
import styles from './Header.css';

export default React.createClass({
	render() {
		return <header>
			<h1 className={styles.heading}>todos</h1>
			{this.props.children}
		</header>
	}
});
