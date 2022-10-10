import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Navigation } from '../../models/app.model';

// Set initialState
const initialState = {
  currentSection: 'GALLERY',
  currentProject: 0
} as Navigation;

const navSlice = createSlice({
  name: 'setNav',
  initialState,
  reducers: {
    setNav(state, action: PayloadAction<string>) {
      state.currentSection = action.payload;
    },
    setProject(state, action: PayloadAction<number>) {
      state.currentProject = action.payload;
    }
  }
});

// Export nav actions from navSlice
export const { setNav, setProject } = navSlice.actions;

// Export reducer
export default navSlice.reducer;
