import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../models/app.model';

// Set initialState
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

// Export theme actions from themeSlice
export const { setTheme, setImgTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
