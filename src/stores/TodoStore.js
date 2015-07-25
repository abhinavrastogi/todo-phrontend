import { Store } from 'phrontend';
import TodoCollection from '../collections/TodoCollection';
import Actions from '../actions/TodoActions.js';

let TodoStore = Store.create({
	collection: TodoCollection,
	handler: function(payload) {
		switch(payload.actionType) {
			case Actions.ADD_TODO:
				this.add({id: this.length + 1, title: payload.data, done: false});
				this.emitChange();
				break;

			case Actions.MARK_AS_DONE:
				var taskAtHand = this.get(payload.data).toJSON();
				taskAtHand.done = true;
				this.add(taskAtHand, {merge: true});
				this.emitChange();
				break;
		}
	}
});

export default TodoStore;
