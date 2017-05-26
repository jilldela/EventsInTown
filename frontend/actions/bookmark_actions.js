import * as APIUtil from '../util/bookmark_api_util';
import { fetchUser } from './user_actions';
import { fetchSingleEvent } from './event_actions';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';

export const receiveBookmark = (bookmark) =>({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const createBookmark = (bookmark) => (dispatch) => (
  APIUtil.createBookmark(bookmark)
    .then(data => {
      dispatch(fetchSingleEvent(data.event_id));
      dispatch(fetchUser(data.user_id));
    })
);

export const deleteBookmark = (id) => (dispatch) => (
  APIUtil.deleteBookmark(id)
    .then(data => {
      dispatch(fetchSingleEvent(data.event_id));
      dispatch(fetchUser(data.user_id));
    })
);
