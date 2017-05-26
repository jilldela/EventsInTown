import * as APIUtil from '../util/session_api_util';
import { receiveUser } from './user_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestSignUp = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then((currentUser) => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
      errors => dispatch(receiveErrors(errors))
    )
);

export const requestLogIn = (user) => (dispatch) => (
  APIUtil.login(user)
  .then((currentUser) => {
    dispatch(receiveCurrentUser(currentUser));
    dispatch(clearErrors());
    return currentUser;
  },
      errors => dispatch(receiveErrors(errors))
    )
);

export const requestLogOut = () => (dispatch) => (
  APIUtil.logout()
    .then(
      () => {
        dispatch(receiveCurrentUser(null));
        dispatch(receiveUser(null));
      },
      errors => dispatch(receiveErrors(errors))
    )
);
