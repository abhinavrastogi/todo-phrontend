import React from 'react';
import TodoApp from './src/components/TodoApp';

window.addEventListener('DOMContentLoaded', function() {
	//Append the component to the container
	React.render(<TodoApp/>, document.getElementById('container'));
});
