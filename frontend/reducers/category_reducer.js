import { merge } from 'lodash';

import { RECEIVE_CATEGORIES, RECEIVE_SINGLE_CATEGORY } from '../actions/category_actions';

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
    default:
      return state;
  }
};

export default categoryReducer;
