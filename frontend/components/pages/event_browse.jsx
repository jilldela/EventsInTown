import React from 'react';

import CategoryList from '../categories/category_list';
import EventIndexContainer from '../events/event_index_container';

class EventBrowse extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="category-browse-container">
        <CategoryList />
        <EventIndexContainer />
      </div>
    );
  }
}

export default EventBrowse;
