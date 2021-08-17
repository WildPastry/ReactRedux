import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ProjectFilter {
	ShowAll = 'SHOW_ALL',
	ShowCompleted = 'SHOW_COMPLETED',
	ShowActive = 'SHOW_ACTIVE'
}

const initialState = ProjectFilter.ShowAll;

const projectFilterSlice = createSlice({
	name: 'visibilityFilter',
	initialState,
	reducers: {
		setProjectFilter(state, action: PayloadAction<ProjectFilter>) {
			return action.payload;
		}
	}
});

export const { setProjectFilter } = projectFilterSlice.actions;

export default projectFilterSlice.reducer;
