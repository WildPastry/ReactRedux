import { combineReducers } from '@reduxjs/toolkit';
import loadPage from '../slices/loadSlice';
import setTheme from '../slices/themeSlice';
import setProjects from '../slices/projectSlice';
import setFilters from '../slices/filterSlice';
import setNav from '../slices/navSlice';

const rootReducer = combineReducers({
	loadPage,
	setTheme,
	setProjects,
	setNav,
	setFilters
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
