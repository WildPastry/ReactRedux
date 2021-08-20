// imports
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types';

// set initialState
const initialState = {
	appTheme: 'DARK',
	imgTheme: 'DARK'
} as Theme;

const themeSlice = createSlice({
	name: 'setTheme',
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<string>) {
			state.appTheme = action.payload;
		},
		setImgTheme(state, action: PayloadAction<string>) {
			state.imgTheme = action.payload;
		}
	}
});

// export theme actions from themeSlice
export const { setTheme, setImgTheme } = themeSlice.actions;

// export reducer
export default themeSlice.reducer;
