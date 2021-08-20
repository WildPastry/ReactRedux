// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectFilter } from '../../types';

// set initialState
const initialState = ProjectFilter.ShowAll;

// create loadingSlice with the project filter action
const projectFilterSlice = createSlice({
	name: 'filterProjects',
	initialState,
	reducers: {
		setProjectFilter(_state, action: PayloadAction<ProjectFilter>) {
			return action.payload;
		}
	}
});

// export filter actions from projectFilterSlice
export const { setProjectFilter } = projectFilterSlice.actions;

// export reducer
export default projectFilterSlice.reducer;
