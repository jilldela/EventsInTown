import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Bookmark from './bookmark';
import { fetchUser } from '../../actions/user_actions';
import { createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = ({ session, user }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  user: ( user || { bookmarks: [] })
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: bookmark =>  dispatch(createBookmark(bookmark)),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteBookmark: id => dispatch(deleteBookmark(id))
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark));
