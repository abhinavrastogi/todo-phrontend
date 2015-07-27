import React from 'react';
import TodoApp from './src/components/TodoApp';
import styles from './styles.css';

window.addEventListener('DOMContentLoaded', function() {
	//Append the component to the container
	React.render(<TodoApp/>, document.getElementById('container'));
});
