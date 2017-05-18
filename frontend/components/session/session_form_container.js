import { connect } from 'react-redux';

import SessionModal from './modal';
import { requestSignUp, requestLogIn, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
    loggedIn: Boolean(session.currentUser),
    errors
});

const mapDispatchToProps = (dispatch, { type }) => {
  const processForm = (type === 'Log In') ? requestLogIn : requestSignUp;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    type,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionModal);
