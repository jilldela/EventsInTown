import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[newState.currentUser] = action.currentUser;
    case RECEIVE_ERRORS:
      newState[newState.errors] = action.errors;
    default:
      return state;
  }
};

export default sessionReducer;
