import { combineReducers } from '@reduxjs/toolkit'

import setProjects from '../../features/slices/projectSlice';
import filterProjects from '../../features/slices/filterSlice';

const rootReducer = combineReducers({
  setProjects,
  filterProjects
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer