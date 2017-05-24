import { connect } from 'react-redux';

import TicketBar from './ticket_bar';
import { requestLogIn, requestSignUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ session, eventDetail, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  session, eventDetail, errors
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketBar);
