import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import EventModal from './event_modal';
import { createEvent, updateEvent, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = ({ errors, session, eventDetail }, ownProps) => ({
  errors, eventDetail, session,
  closeModal: ownProps.closeModal
});

const mapDispatchToProps = (dispatch, { type }) => ({
    createEvent: eventDetail => dispatch(createEvent(eventDetail)),
    updateEvent: eventDetail => dispatch(updateEvent(eventDetail)),
    deleteEvent: id => dispatch(deleteEvent(id)),
    type
});

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
)(EventModal));
