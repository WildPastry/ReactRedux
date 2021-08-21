// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Navigation } from '../../types';

// set initialState
const initialState = {
	currentSection: 'GALLERY'
} as Navigation;

const navSlice = createSlice({
	name: 'setNav',
	initialState,
	reducers: {
		setNav(state, action: PayloadAction<string>) {
			state.currentSection = action.payload;
		}
	}
});

// export theme actions from navSlice
export const { setNav } = navSlice.actions;

// export reducer
export default navSlice.reducer;
