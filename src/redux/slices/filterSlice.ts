import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectFilter } from '../../types';

const initialState = ProjectFilter.ShowAll;

const projectFilterSlice = createSlice({
	name: 'filterProjects',
	initialState,
	reducers: {
		setProjectFilter(_state, action: PayloadAction<ProjectFilter>) {
			return action.payload;
		}
	}
});

export const { setProjectFilter } = projectFilterSlice.actions;

export default projectFilterSlice.reducer;
