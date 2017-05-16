import { connect } from 'react-redux';

import NavBar from './nav_bar';
import { requestLogIn, requestLogOut } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestLogIn: user => dispatch(requestLogIn(user)),
  requestLogOut: () => dispatch(requestLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
