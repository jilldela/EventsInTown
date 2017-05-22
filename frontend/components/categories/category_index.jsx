import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const categories = values(this.props.categories);
    const { fetchSingleCategory } = this.props;

    return(
      <div>
        <h1>Browse by Category</h1>
        <div>
          {categories.map(category =>
            <CategoryIndexItem
              key={`category-${category.id}`}
              category={category}
              fetchSingleCategory={fetchSingleCategory}/>
          )}
        </div>
      </div>
    );
  }
}

export default CategoryIndex;
