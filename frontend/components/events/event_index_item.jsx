import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventDetail } = this.props;

    console.log(eventDetail);

    return (

        <div className="carousel-cell" >
          <Link to={`/events/${eventDetail.id}`} className="thumbnail">
            <ul className="event-box">
                <img
                  className="cell-image"
                  src={`${eventDetail.image}`}
                  alt={`${eventDetail.title}`}/>
              <uL className="event-thumbnail-details">
                <li>{eventDetail.title}</li>
                <li>{moment(eventDetail.date).format('MMMM Do YYYY')}</li>
                <li>{eventDetail.location}</li>
                <li>{eventDetail.categories.map(category => `${category.name}. `)}</li>
                <li>${eventDetail.ticket_price}</li>
              </uL>
            </ul>
          </Link>

        </div>

    );
  }
}

export default EventIndexItem;
