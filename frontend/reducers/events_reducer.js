import { merge } from 'lodash';

import { RECEIVE_EVENTS, RECEIVE_SINGLE_EVENT, REMOVE_EVENT } from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_SINGLE_EVENT:
      newState = merge({}, state);
      newState[action.eventDetail.id] = action.eventDetail;
      return newState;
    case REMOVE_EVENT:
      newState = merge({}, state);
      delete newState[action.eventDetail.id];
      return newState;
    default:
      return state;
  }
};

export default eventsReducer;
