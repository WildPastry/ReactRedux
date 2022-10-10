import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProjectFilter } from '../../models/app.model';

// Set initialState
const initialState = ProjectFilter.ShowAll;

// Create filterSlice with the project filter action
const filterSlice = createSlice({
  name: 'setFilters',
  initialState,
  reducers: {
    setProjectFilter(_state, action: PayloadAction<ProjectFilter>) {
      return action.payload;
    }
  }
});

// Export filter actions from filterSlice
export const { setProjectFilter } = filterSlice.actions;

// Export reducer
export default filterSlice.reducer;
