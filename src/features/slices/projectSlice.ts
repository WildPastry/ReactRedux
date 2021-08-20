// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../redux';
import { setError } from './loadingSlice';
import { Project } from '../types';

// set initialState
const initialState: Project[] = [];

// create slice with combined actions
const projectSlice = createSlice({
	name: 'setProjects',
	initialState,
	reducers: {
		resetProjects: (_state) => initialState,
		setProjects(state, action: PayloadAction<Project[]>) {
			action.payload.forEach((proj: any) => state.push(proj));
		},
		filterProjects(state, action: PayloadAction<Project>) {
			let project = state.find((project) => project.id === action.payload.id);
			if (project) {
				project.filtered = !project.filtered;
			}
		}
	}
});

// export filter actions from project actions
export const { filterProjects } = projectSlice.actions;

// setProjects function
export const setProjects =
	(projects: any[]): AppThunk =>
	async (dispatch: AppDispatch) => {
		try {
			console.log(projects, projects.length);
			// reset projects first
			dispatch(projectSlice.actions.resetProjects());
			// map each project
			const setProject: Project[] = projects.map((proj) => ({
				id: proj.id,
				desc: proj.desc,
				name: proj.name,
				fields: proj.fields,
				client: proj.client,
				timeline: proj.timeline,
				website: proj.website,
				thumb: proj.thumb,
				images: proj.images,
				icons: proj.icons,
				intro: proj.intro,
				url: proj.url,
				git: proj.git,
				gitUrl: proj.gitUrl,
				filtered: false
			}));
			// dispatch projects once finished mapping
			dispatch(projectSlice.actions.setProjects(setProject));
		} catch (err) {
			dispatch(setError(true));
		}
	};

export default projectSlice.reducer;
