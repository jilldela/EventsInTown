import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  currentUser: null
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser
      };
    default:
      return state;
  }
};

export default sessionReducer;
