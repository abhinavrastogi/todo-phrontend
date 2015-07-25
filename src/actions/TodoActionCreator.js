import { Dispatcher } from 'phrontend';
import Actions from './TodoActions';

let TodoActionCreator = {
	addTodo: function(title) {
		Dispatcher.dispatch(Actions.ADD_TODO, title);
	},
	toggleDone: function(taskId) {
		Dispatcher.dispatch(Actions.TOGGLE_DONE, taskId);
	}
};

export default TodoActionCreator;
