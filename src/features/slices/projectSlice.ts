import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../redux';
import { Project } from '../types';

// const initialState = {
//   showProjects: [] as Project[]
// };

const initialState: Project[] = [];

const projectSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<Project>) {
			state.push(action.payload);
		},
		toggleTodo(state, action: PayloadAction<Project>) {
			let todo = state.find((todo) => todo.id === action.payload.id);

			if (todo) {
				todo.completed = !todo.completed;
			}
		}
	}
});

export const { toggleTodo } = projectSlice.actions;

export const setProjects =
	(projects: any[]): AppThunk =>
	async (dispatch: AppDispatch) => {
		console.log(projects);
		// const setProjects = projects
		// const setProjects: Project = [projects];
		const setProjects: Project = {
			...projects,
			id: projects[0].id,
			desc: projects[0].desc,
			name: projects[0].name,
			fields: [],
			client: projects[0].client,
			timeline: projects[0].timeline,
			website: projects[0].website,
			thumb: [],
			images: [{ src: '', id: '' }],
			icons: [{ src: '', id: '' }],
			intro: projects[0].intro,
			url: projects[0].url,
			git: projects[0].git,
			gitUrl: projects[0].gitUrl,
			completed: false
		};
		dispatch(projectSlice.actions.setProjects(setProjects));
	};

export default projectSlice.reducer;
