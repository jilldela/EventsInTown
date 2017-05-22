import { merge } from 'lodash';

import { RECEIVE_CATEGORIES, RECEIVE_SINGLE_CATEGORY } from '../actions/category_actions';

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_SINGLE_CATEGORY:
      newState = merge({}, state);
      newState[action.category.id] = action.category;
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
