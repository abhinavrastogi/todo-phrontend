import { State } from 'phrontend';

export default State.extend({
	props: {
		id: 'number',
		title: 'string',
		done: 'boolean'
	}
});
