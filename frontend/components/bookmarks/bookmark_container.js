import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Bookmark from './bookmark';
import { fetchUser } from '../../actions/user_actions';
import { createBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = ({ session, user }) => ({
  currentUser: session.currentUser,
  user: ( user || { bookmarks: [] })
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: bookmark =>  dispatch(createBookmark(bookmark)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark));
