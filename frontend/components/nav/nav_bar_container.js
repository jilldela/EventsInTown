import { connect } from 'react-redux';

import NavBar from './nav_bar';

import {
  requestSignUp,
  requestLogIn,
  requestLogOut
} from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestLogOut: dispatch(requestLogOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
