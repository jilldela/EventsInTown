import React from 'react';
import { withRouter } from 'react-router-dom';

import CategoryList from '../categories/category_list';
import CategoryEventsContainer from '../categories/category_events_container';

class CategoryBrowse extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const {match} = this.props;
    return (
      <div className="category-browse-container">
        <CategoryList />
        <CategoryEventsContainer match={match}/>
      </div>
    );
  }
}

export default withRouter(CategoryBrowse);
