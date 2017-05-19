import { merge } from 'lodash';

import { RECEIVE_SINGLE_EVENT } from '../actions/event_actions';

const defaultEvent = {
  organizer_id: 0,
  title: '',
  location: '',
  date: '',
  time: '',
  description: '',
  image: '',
  ticket_price: 0,
  ticket_quantity: 0
};

const eventDetailReducer = (state = defaultEvent, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SINGLE_EVENT:
      return merge({}, action.eventDetail);
    default:
      return state;
  }
};

export default eventDetailReducer;
