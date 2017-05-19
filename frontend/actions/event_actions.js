import * as APIUtil from '../util/event_api_util';
import { receiveErrors, clearErrors } from './session_actions';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_SINGLE_EVENT = "RECEIVE_SINGLE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

//sync actions:

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveSingleEvent = (eventDetail) => ({
  type: RECEIVE_SINGLE_EVENT,
  eventDetail
});

export const removeEvent = (eventDetail) => ({
  type: REMOVE_EVENT,
  eventDetail
});

//async actions:

export const fetchEvents = () => (dispatch) => (
  APIUtil.fetchEvents()
    .then((events) => {
      dispatch(receiveEvents(events));
      dispatch(clearErrors());
    },
      errors => dispatch(receiveErrors())
  )
);

export const fetchSingleEvent = (id) => (dispatch) => (
  APIUtil.fetchSingleEvent(id)
    .then((eventDetail) => {
      dispatch(receiveSingleEvent(eventDetail));
      dispatch(clearErrors());
    },
      errors => dispatch(receiveErrors(errors))
  )
);

export const createEvent = (eventDetail) => (dispatch) => (
  APIUtil.createEvent(eventDetail)
    .then((respEventDetail) => {
      dispatch(receiveSingleEvent(respEventDetail));
      dispatch(clearErrors());
      return respEventDetail;
    },
      errors => dispatch(receiveErrors(errors))
  )
);

export const updateEvent = (eventDetail) => (dispatch) => (
  APIUtil.updateEvent(eventDetail)
    .then((respEventDetail) => {
      dispatch(receiveSingleEvent(respEventDetail));
      dispatch(clearErrors());
    },
      errors => dispatch(receiveErrors(errors))
  )
);

export const deleteEvent = (eventDetail) => (dispatch) => (
  APIUtil.deleteEvent(eventDetail)
    .then((respEventDetail) => {
      dispatch(removeEvent(respEventDetail));
      dispatch(clearErrors());
    },
      errors => dispatch(receiveErrors(errors))
  )
);
