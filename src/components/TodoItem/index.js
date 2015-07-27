import React from 'react';
import cx from 'classnames';

import ActionCreator from '../../actions/TodoActionCreator';

import styles from './TodoItem.css';

export default React.createClass({
	getInitialState() {
		return {
			editing: false
		}
	},
	toggleDone(taskId) {
		ActionCreator.toggleDone(taskId);
	},
	deleteTodo(taskId) {
		ActionCreator.deleteTodo(taskId);
	},
	toggleEdit() {
		this.setState({
			editing: !this.state.editing
		});
		setTimeout(()=>{
			if(!this.props.data.done && this.state.editing) {
				this.refs.newTitle.getDOMNode().focus();
			}
		}, 0);
	},
	updateItem(taskId) {
		let val = this.refs.newTitle.getDOMNode().value;
		if(val.trim() != '') {
			ActionCreator.updateItem(taskId, val);
			this.toggleEdit();
		}
	},
	keyUpdateItem(taskId, e) {
		if(e.keyCode == 13) {
			this.updateItem(taskId);
		}
	},
	render() {
		var itemClasses = {};
		itemClasses[styles.done] = this.props.data.done;

		return <li className={cx(styles.item, itemClasses)}>
			<div className={styles.doneTick} onClick={this.toggleDone.bind(this, this.props.data.id)}>&#10004;</div>
			<div className={styles.title}>
				{!this.props.data.done && this.state.editing ?
					<input className={styles.editTxt} type='text' ref='newTitle' defaultValue={this.props.data.title}
						   onBlur={this.updateItem.bind(this, this.props.data.id)}
						   onKeyUp={this.keyUpdateItem.bind(this, this.props.data.id)} /> :
					<span onClick={this.toggleEdit}>{this.props.data.title}</span> }
			</div>
			<div className={styles.remove} onClick={this.deleteTodo.bind(this, this.props.data.id)}>delete</div>
		</li>
	}
});
