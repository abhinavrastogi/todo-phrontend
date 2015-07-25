import { Dispatcher } from 'phrontend';
import Actions from './TodoActions';

let TodoActionCreator = {
	addTodo: function(title) {
		Dispatcher.dispatch(Actions.ADD_TODO, title);
	}
};

export default TodoActionCreator;
