import * as APIUtil from '../util/bookmark_api_util';
import { fetchUser } from './user_actions';
import { receiveSingleEvent } from './event_actions';
import { fetchSingleCategory, receiveCategoryEvent } from './category_actions';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';

export const receiveBookmark = (bookmark) =>({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const createBookmark = (bookmark) => (dispatch) => (
  APIUtil.createBookmark(bookmark)
    .then(data => {
      dispatch(receiveSingleEvent(data));
      dispatch(fetchUser(data.current_user_id));
      dispatch(receiveCategoryEvent(data));
      return data;
    })
);

export const deleteBookmark = (id) => (dispatch) => (
  APIUtil.deleteBookmark(id)
    .then(data => {
      dispatch(receiveSingleEvent(data));
      dispatch(fetchUser(data.current_user_id));
      dispatch(receiveCategoryEvent(data));
      return data;
    })
);
