// import { createStore } from "redux";
// import projectDataReducer from "./reducers";

// export default createStore(projectDataReducer);

// import { createStore } from 'redux';
// import rootReducer from './reducers/projectReducers';

// const store = createStore(rootReducer);

// export default store;

import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './reducers/rootReducer';

const store = configureStore({
	reducer: rootReducer
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
