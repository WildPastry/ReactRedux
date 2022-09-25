import { combineReducers } from '@reduxjs/toolkit';
import loadPage from '../slices/loadSlice';
import setFilters from '../slices/filterSlice';
import setNav from '../slices/navSlice';
import setProjects from '../slices/projectSlice';
import setTheme from '../slices/themeSlice';

const rootReducer = combineReducers({
  loadPage,
  setTheme,
  setProjects,
  setNav,
  setFilters
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
