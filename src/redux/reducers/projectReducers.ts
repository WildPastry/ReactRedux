// import action types
import { SET_PROJECT } from '../../constants/actions-types';

const initialState = {
  projects: [{
    title: 'THIS'
  }] as any[]
};

function rootReducer(state = initialState, action: any) {
  if (action.type === SET_PROJECT) {
    return Object.assign({}, state, {
      projects: state.projects.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;