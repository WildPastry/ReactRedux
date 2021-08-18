import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../redux';
import { setError } from './loadingSlice';
import { Project } from '../types';

const initialState: Project[] = [];

const projectSlice = createSlice({
	name: 'setProjects',
	initialState,
	reducers: {
		resetProjects: (_state) => initialState,
		setProjects(state, action: PayloadAction<Project>) {
			state.push(action.payload);
		},
		filterProjects(state, action: PayloadAction<Project>) {
			let project = state.find((project) => project.id === action.payload.id);
			if (project) {
				project.filtered = !project.filtered;
			}
		}
	}
});

export const { filterProjects } = projectSlice.actions;

export const setProjects =
	(projects: any[]): AppThunk =>
	async (dispatch: AppDispatch) => {
		console.log(projects, projects.length);
		dispatch(projectSlice.actions.resetProjects());
		for (let i = 0; i < projects.length; i++) {
			var setProject: Project = {
				id: projects[i].id,
				desc: projects[i].desc,
				name: projects[i].name,
				fields: projects[i].fields,
				client: projects[i].client,
				timeline: projects[i].timeline,
				website: projects[i].website,
				thumb: projects[i].thumb,
				images: projects[i].images,
				icons: projects[i].icons,
				intro: projects[i].intro,
				url: projects[i].url,
				git: projects[i].git,
				gitUrl: projects[i].gitUrl,
				filtered: false
			};
			dispatch(projectSlice.actions.setProjects(setProject));
		}
		// dispatch(setError(true));
	};

export default projectSlice.reducer;
