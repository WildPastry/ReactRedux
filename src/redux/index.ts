// import { createStore } from "redux";
// import projectDataReducer from "./reducers";

// export default createStore(projectDataReducer);

import { createStore } from 'redux';
import rootReducer from './reducers/projectReducers';

const store = createStore(rootReducer);

export default store;
