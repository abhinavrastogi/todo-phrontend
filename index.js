import React from 'react';
import Todo from './src/components/Todo';

window.addEventListener('DOMContentLoaded', function() {
	//Append the component to the container
	React.render(<Todo/>, document.getElementById('container'));
});
