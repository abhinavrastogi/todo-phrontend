import { Dispatcher } from 'phrontend';
import Actions from './TodoActions';

let TodoActionCreator = {
	addTodo: function(title) {
		Dispatcher.dispatch(Actions.ADD_TODO, title);
	},
	markAsDone: function(taskId) {
		Dispatcher.dispatch(Actions.MARK_AS_DONE, taskId);
	}
};

export default TodoActionCreator;
