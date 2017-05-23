import { connect } from 'react-redux';

import CategoryEvents from './category_events';
import { fetchSingleCategory } from '../../actions/category_actions';

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleCategory: (name) => dispatch(fetchSingleCategory(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryEvents);
