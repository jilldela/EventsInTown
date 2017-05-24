import React from 'react';
import values from 'lodash/values';

import EventIndexItem from '../events/event_index_item';

class CategoryEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSingleCategory(this.props.match.params.name);
  }

  render() {
    const category = values(this.props.categories);
    let events = [];

    if (category.length > 0) {
       events = this.props.categories.events;
    }

    const displayEvents = events ?
    (events.map(eventDetail => (
      <EventIndexItem
        key={`eventDetail-${eventDetail.id}`}
        eventDetail={eventDetail} />
    )
    )) : undefined

    return (
      <div className="category-show">
        {displayEvents}
      </div>
  );

  }
}

export default CategoryEvents;
