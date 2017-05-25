import * as APIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';

export const receiveBookmark = (bookmark) =>({
  type: RECEIVE_BOOKMARK,
  bookmark
});

export const createBookmark = (bookmark) => (dispatch) => (
  APIUtil.createBookmark(bookmark)
);
