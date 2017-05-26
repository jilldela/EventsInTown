import { connect } from 'react-redux';

import TicketBar from './ticket_bar';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = ({ session, eventDetail, errors }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  session, errors,
  eventDetail: ownProps.eventDetail
});

const mapDispatchToProps = (dispatch) => ({
  createTicket: ticket => dispatch(createTicket(ticket))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketBar);
