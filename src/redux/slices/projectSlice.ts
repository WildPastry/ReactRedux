// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '..';
import { setError } from './loadSlice';
import { Project } from '../../types';

// set initialState
const initialState: Project[] = [];

// create projectSlice with combined actions
// including: reset projectSlice, set projects and filter projects
const projectSlice = createSlice({
	name: 'setProjects',
	initialState,
	reducers: {
		resetProjects: (_state) => initialState,
		setProjects(state, action: PayloadAction<Project[]>) {
			action.payload.forEach((proj: any) => state.push(proj));
		},
		setFilters(state, action: PayloadAction<Project>) {
			let project = state.find((project) => project.id === action.payload.id);
			if (project) {
				project.filtered = !project.filtered;
			}
		}
	}
});

// export filter actions from projectSlice
export const { setFilters } = projectSlice.actions;

// setProjects function
export const setProjects =
	(projects: any[]): AppThunk =>
		async (dispatch: AppDispatch) => {
			try {
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
				// create error page if errors
				dispatch(setError(true));
			}
		};

// export reducer
export default projectSlice.reducer;
