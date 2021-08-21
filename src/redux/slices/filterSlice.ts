// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectFilter } from '../../types';

// set initialState
const initialState = ProjectFilter.ShowAll;

// create filterSlice with the project filter action
const filterSlice = createSlice({
	name: 'setFilters',
	initialState,
	reducers: {
		setProjectFilter(_state, action: PayloadAction<ProjectFilter>) {
			return action.payload;
		}
	}
});

// export filter actions from filterSlice
export const { setProjectFilter } = filterSlice.actions;

// export reducer
export default filterSlice.reducer;
