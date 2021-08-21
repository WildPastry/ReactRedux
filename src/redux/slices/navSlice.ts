// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Navigation } from '../../types';

// set initialState
const initialState = {
	currentSection: 'GALLERY',
	currentProject: null
} as Navigation;

const navSlice = createSlice({
	name: 'setNav',
	initialState,
	reducers: {
		setNav(state, action: PayloadAction<string>) {
			state.currentSection = action.payload;			
		},
		setProject(state, action: PayloadAction<string>) {
			state.currentProject = action.payload;			
		}
	}
});

// export nav actions from navSlice
export const { setNav, setProject } = navSlice.actions;

// export reducer
export default navSlice.reducer;
