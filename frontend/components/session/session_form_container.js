import { connect } from 'react-redux';

import SessionModal from './modal';
import {
  requestSignUp,
  requestLogIn,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
    loggedIn: Boolean(session.currentUser),
    errors
});

const mapDispatchToProps = (dispatch, { type }) => ({
    requestLogIn: user => dispatch(requestLogIn(user)),
    requestSignUp: user => dispatch(requestSignUp(user)),
    clearErrors: () => dispatch(clearErrors()),
    type
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
