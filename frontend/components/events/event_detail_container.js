import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import EventDetail from './event_detail';
import { fetchSingleEvent, updateEvent, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = ({ eventDetail, session, errors }) => ({
  eventDetail: (eventDetail || {}),
  session: (session || {}),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: id => dispatch(fetchSingleEvent(id)),
  updateEvent: eventDetail => dispatch(updateEvent(eventDetail)),
  deleteEvent: id => dispatch(deleteEvent(id)),
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail));
