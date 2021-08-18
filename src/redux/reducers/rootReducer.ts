import { combineReducers } from '@reduxjs/toolkit';
import loadPage from '../../features/slices/loadingSlice';
import setProjects from '../../features/slices/projectSlice';
import filterProjects from '../../features/slices/filterSlice';

const rootReducer = combineReducers({
	loadPage,
	setProjects,
	filterProjects
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
