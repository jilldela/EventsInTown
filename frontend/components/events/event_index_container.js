import { connect } from 'react-redux';

import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';

const mapStateToProps = ({ events }) => ({
  events: selectAllEvents(events)
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
