import { connect } from 'react-redux';

import EventDetail from './event_detail';
import { fetchSingleEvent } from '../../actions/event_actions';

const mapStateToProps = ({ eventDetail }) => ({
  eventDetail
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: id => dispatch(fetchSingleEvent(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
