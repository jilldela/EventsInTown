import React from 'react';
import Flickity from 'react-flickity-component';

import EventIndex from './event_index';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events, deleteEvent, fetchEvents } = this.props;

    const flickityOptions = {
      cellAlign: "left",
      contain: true,
      setGallerySize: false,
      wrapAround: true,
      resize: true,
      pageDots: true,
      draggable: true,
      accessibility: true,
      initialIndex: 1
    };

    return (
      <Flickity
          className={"main-carousel flickity-enabled"}
          elementType={"span"}
          options={flickityOptions}>

          FLICKITY
          <EventIndex events={events} deleteEvent={deleteEvent} />
      </Flickity>
    );
  }
}

export default Carousel;
