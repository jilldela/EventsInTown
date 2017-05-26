import { merge } from 'lodash';

import { RECEIVE_CATEGORIES, RECEIVE_SINGLE_CATEGORY, RECEIVE_CATEGORY_EVENT } from '../actions/category_actions';

const defaultState = {
  events: []
};

const categoryReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_SINGLE_CATEGORY:
      return action.category;
    case RECEIVE_CATEGORY_EVENT:
      newState = Object.assign({}, state);
      newState.events = newState.events.map(event => {
        if (action.event.id === event.id) {
          return action.event;
        } else {
          return event;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
