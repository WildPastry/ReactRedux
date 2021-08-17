import { combineReducers } from '@reduxjs/toolkit'

import todos from '../../features/slices/projectSlice';
import visibilityFilter from '../../features/slices/visibilityFilterSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer