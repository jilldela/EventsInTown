import React from 'react';
import { Route } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, deleteEvent } = this.props;

    return (
      <div className="event-index-container">
        <h1 className="event-index-header">EventsIndex</h1>
        <Carousel className="event-index" wrapAround={true}>
          {events.map(eventDetail =>
            <EventIndexItem
              deleteEvent={deleteEvent}
              eventDetail={eventDetail}
              key={`event-${eventDetail.id}`}
              />
          )}
        </Carousel>
      </div>
    );

  }
}

export default EventIndex;
