import React from 'react';
import { Link, Route } from 'react-router-dom';
import Carousel from 'nuka-carousel';

import EventIndexItem from './event_index_item';

class EventIndexCarousel extends React.Component {
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
        <Carousel
          className="event-index"
          wrapAround={true}
          dragging={true}
          cellAlign={'center'}>

          {events.map(eventDetail =>
            <EventIndexItem
              deleteEvent={deleteEvent}
              eventDetail={eventDetail}
              key={`event-${eventDetail.id}`}
              />
          )}

        </Carousel>
        <Link to="/events" className="event-index-link">View All Events</Link>
      </div>


    );
  }
}

export default EventIndexCarousel;
