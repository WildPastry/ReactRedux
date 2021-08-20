import { combineReducers } from '@reduxjs/toolkit';
import loadPage from '../slices/loadingSlice';
import setTheme from '../slices/themeSlice';
import setProjects from '../slices/projectSlice';
import filterProjects from '../slices/filterSlice';

const rootReducer = combineReducers({
	loadPage,
	setTheme,
	setProjects,
	filterProjects
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
