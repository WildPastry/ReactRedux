import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../redux';
import { Todo } from '../types/types';

const initialState: Todo[] = [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<Todo>) {
			state.push(action.payload);
		},
		toggleTodo(state, action: PayloadAction<Todo>) {
			let todo = state.find((todo) => todo.id === action.payload.id);

			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});

export const { toggleTodo } = todoSlice.actions;

export const addTodo =
	(projects: any[]): AppThunk =>
	async (dispatch: AppDispatch) => {
		const newTodo: Todo = {
			id: projects[0].id,
			desc: projects[0].desc,
			name: '',
			fields: [],
			client: '',
			timeline: '',
			website: '',
			thumb: [],
			images: [{src:'', id:''}],
			icons: [{src:'', id:''}],
			intro: '',
			url: '',
			git: '',
			gitUrl: '',
			completed: false
		};

		dispatch(todoSlice.actions.addTodo(newTodo));
	};

export default todoSlice.reducer;
