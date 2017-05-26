import { connect } from 'react-redux';

import EventIndexCarousel from './carousel';
import { fetchEvents, fetchSingleEvent } from '../../actions/event_actions';
import { selectAllEvents, deleteEvent } from '../../reducers/selectors';

const mapStateToProps = ({ events }) => ({
  events: selectAllEvents(events)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchSingleEvent: id => dispatch(fetchSingleEvent(id)),
  deleteEvent: eventDetail => dispatch(deleteEvent(eventDetail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexCarousel);
