import { Store } from 'phrontend';
import TodoCollection from '../collections/TodoCollection'

let TodoStore = Store.create({
	collection: TodoCollection,
	handler: function(payload) {
		console.log('got payload', payload);
	}
});

export default TodoStore;
