import { Store } from 'phrontend';
import TodoCollection from '../collections/TodoCollection';
import Actions from '../actions/TodoActions.js';

let TodoStore = Store.create({
	collection: TodoCollection,
	handler: function(payload) {
		switch(payload.actionType) {
			case Actions.ADD_TODO:
				this.add({id: this.length + 1, title: payload.data, done: false}, {parse: true});
				this.emitChange();
				break;
		}
	}
});

export default TodoStore;
