import { combineReducers } from '@reduxjs/toolkit'

import projects from '../../features/slices/projectSlice';
import projectFilter from '../../features/slices/filterSlice';

const rootReducer = combineReducers({
  projects,
  projectFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer