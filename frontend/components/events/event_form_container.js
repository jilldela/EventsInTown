import { connect } from 'react-redux';

import EventModal from './event_modal';
import { createEvent, updateEvent } from '../../actions/event_actions';

const mapStateToProps = ({ errors, session, eventDetail }) => ({
  errors, eventDetail, session
});

const mapDispatchToProps = (dispatch, { type }) => ({
    createEvent: eventDetail => dispatch(createEvent(eventDetail)),
    updateEvent: eventDetail => dispatch(updateEvent(eventDetail)),
    type
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal);
