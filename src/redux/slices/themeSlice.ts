import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types';

const initialState = {
	theme: 'DARK',
	imgTheme: 'DARK'
} as Theme;

const themeSlice = createSlice({
	name: 'setTheme',
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<string>) {
			state.theme = action.payload;
		},
		setImgTheme(state, action: PayloadAction<string>) {
			state.imgTheme = action.payload;
		}
	}
});

export const { setTheme, setImgTheme } = themeSlice.actions;

export default themeSlice.reducer;
