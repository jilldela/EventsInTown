import { connect } from 'react-redux';

import UserPage from '../pages/user_page';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  userTickets: ( session.currentUser.tickets || [] ),
  userHosted: ( session.currentUser.hosted || [] ),
  userBookmarks: ( session.currentUser.bookmarks || [] ),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
