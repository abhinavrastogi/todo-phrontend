import { Dispatcher } from 'phrontend';
import Actions from './TodoActions';

let TodoActionCreator = {
	addTodo: function(title) {
		Dispatcher.dispatch(Actions.ADD_TODO, title);
	},
	toggleDone: function(taskId) {
		Dispatcher.dispatch(Actions.TOGGLE_DONE, taskId);
	},
	deleteTodo: function(taskId) {
		Dispatcher.dispatch(Actions.DELETE_TODO, taskId);
	},
	updateItem: function(taskId, title) {
		Dispatcher.dispatch(Actions.UPDATE_ITEM, {id: taskId, title});
	}
};

export default TodoActionCreator;
