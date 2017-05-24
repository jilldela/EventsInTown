import { connect } from 'react-redux';

import TicketBar from './ticket_bar';
import { requestLogIn, requestSignUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session, eventDetail, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  eventDetail, errors
});

const mapDispatchToProps = (dispatch) => ({
  requestLogIn: user => dispatch(requestLogIn(user)),
  requestSignUp: user => dispatch(requestSignUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketBar);
