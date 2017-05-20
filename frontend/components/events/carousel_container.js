import { connect } from 'react-redux';

import EventIndexCarousel from './carousel';
import { fetchEvents } from '../../actions/event_actions';
import { selectAllEvents, deleteEvent } from '../../reducers/selectors';

const mapStateToProps = ({ events }) => ({
  events: selectAllEvents(events)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: eventDetail => dispatch(deleteEvent(eventDetail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndexCarousel);
