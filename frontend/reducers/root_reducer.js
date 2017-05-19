import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import userReducer from './user_reducer';
import eventsReducer from './events_reducer';
import eventDetailReducer from './event_detail_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  session: sessionReducer,
  errors: errorReducer,
  events: eventsReducer,
  eventDetail: eventDetailReducer
});

export default rootReducer;
