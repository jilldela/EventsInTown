import { connect } from 'react-redux';

import UserPage from '../pages/user_page';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ session, errors, user }) => ({
  currentUser: session.currentUser,
  userTickets: ( user.tickets || [] ),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
