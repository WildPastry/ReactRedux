import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, AppDispatch } from '../../redux';
import { Project } from '../types';

const initialState: Project[] = [];

const projectSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setProjects(state, action: PayloadAction<Project>) {
				state.push(action.payload);
		},
		filterProjects(state, action: PayloadAction<Project>) {
			let project = state.find((project) => project.id === action.payload.id);

			if (project) {
				project.completed = !project.completed;
			}
		}
	}
});

export const { filterProjects } = projectSlice.actions;

export const setProjects =
	(projects: any[]): AppThunk =>
	async (dispatch: AppDispatch) => {
		console.log(projects);
		const setProjects: Project = {
			id: projects[0].id,
			desc: projects[0].desc,
			name: '',
			fields: [],
			client: '',
			timeline: '',
			website: '',
			thumb: [],
			images: [{ src: '', id: '' }],
			icons: [{ src: '', id: '' }],
			intro: '',
			url: '',
			git: '',
			gitUrl: '',
			completed: false
		};
		dispatch(projectSlice.actions.setProjects(setProjects));
	};

export default projectSlice.reducer;
