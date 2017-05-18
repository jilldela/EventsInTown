import React from 'react';
import { Route } from 'react-router-dom';

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
        <div className="event-index">
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
