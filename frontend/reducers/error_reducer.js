import merge from 'lodash/merge';

import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge([], state, action.errors.responseJSON);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
