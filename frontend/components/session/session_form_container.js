import { connect } from 'react-redux';

import SessionForm from './session_form';
import { requestSignUp, requestLogIn } from '../../actions/session_actions';

const mapStateToProps = ({ session, errors }) => ({
    loggedIn: Boolean(session.currentUser),
    errors
});

const mapDispatchToProps = (dispatch, { formType }) => {
  const processForm = (formType === 'Log In') ? requestLogIn : requestSignUp;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
