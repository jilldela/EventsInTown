import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import BookmarkContainer from '../bookmarks/bookmark_container';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventDetail } = this.props;

    return (
        <div className="carousel-cell" >
          <Link to={`/events/${eventDetail.id}`} className="thumbnail">
            <ul className="event-box">
                <img
                  className="cell-image"
                  src={`${eventDetail.image}`}
                  alt={`${eventDetail.title}`}/>
                <ul className="event-thumbnail-details">
                  <li>{eventDetail.title}</li>
                  <li>{moment(eventDetail.date).format('MMMM Do YYYY')}</li>
                  <li>{eventDetail.location}</li>
                  <li>${eventDetail.ticket_price}</li>
                  <ul className="categories-tag-list">
                    {eventDetail.categories.map(category =>
                      <li key={`${category.name}-${category.id}`}>
                        {`#${category.name} `}
                      </li>
                    )}
                  </ul>
              </ul>
            </ul>
          </Link>
          <BookmarkContainer
            className="event-detail-bookmark"
            eventDetail={eventDetail}/>
        </div>
    );
  }
}

export default EventIndexItem;
