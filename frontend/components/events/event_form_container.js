import { connect } from 'react-redux';

import EventModal from './event_modal';
import { createEvent, updateEvent } from '../../actions/event_actions';

const mapStateToProps = ({ errors, session }) => ({
  errors,
  session
});

const mapDispatchToProps = (dispatch, { type }) => {
  const processForm = (type === 'Create An Event') ? createEvent : updateEvent;

  return {
    createEvent: eventDetail => dispatch(createEvent(eventDetail)),
    updateEvent: eventDetail => dispatch(updateEvent(eventDetail)),
    type
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal);
