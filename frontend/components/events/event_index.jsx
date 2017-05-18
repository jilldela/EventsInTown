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
      <div>
        <h1>EventsIndex</h1>
        <ul className="events-index">
          {events.map(eventDetail =>
            <EventIndexItem
              deleteEvent={deleteEvent}
              eventDetail={eventDetail}
              key={`event-${eventDetail.id}`}/>
          )}
        </ul>
      </div>
    );

  }
}

export default EventIndex;
