
import { connect } from 'react-redux';

import CategoryIndex from './category_index';
import { fetchCategories, fetchSingleCategory } from '../../actions/category_actions';

const mapStateToProps = ({ categories }) => ({
  categories: (categories || {})
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchSingleCategory: (id) => dispatch(fetchSingleCategory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
