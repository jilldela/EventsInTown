import { connect } from 'react-redux';

import EventModal from './event_modal';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = ({ errors, session }) => ({
  errors,
  session
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: eventDetail => dispatch(createEvent(eventDetail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal);