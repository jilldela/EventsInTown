import { connect } from 'react-redux';

import EventDetail from './event_detail';
import { fetchSingleEvent, updateEvent } from '../../actions/event_actions';

const mapStateToProps = ({ eventDetail, session, errors }) => ({
  eventDetail: (eventDetail || {}),
  session: (session || {}),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: id => dispatch(fetchSingleEvent(id)),
  updateEvent: eventDetail => dispatch(updateEvent(eventDetail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
