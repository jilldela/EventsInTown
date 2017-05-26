import React from 'react';
import { Route, Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, deleteEvent } = this.props;

    return (
      <div className="category-show">
        <div className="event-index-items">
          {events.map(eventDetail =>
            <EventIndexItem
              deleteEvent={deleteEvent}
              eventDetail={eventDetail}
              key={`event-${eventDetail.id}`}
              />
          )}
        </div>
      </div>
    );

  }
}

export default EventIndex;
