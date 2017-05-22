import React from 'react';

import moment from 'moment';
import Moment from 'react-moment';

import EditModal from './edit_modal';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.eventId);
  }

  editButton() {
    const { eventDetail, session, updateEvent, errors, deleteEvent, history } = this.props;

    if (eventDetail.organizer && session.currentUser &&
      (session.currentUser.id === eventDetail.organizer_id)) {
      return (
        <EditModal
          history={history}
          updateEvent={updateEvent}
          eventDetail={eventDetail}
          deleteEvent={deleteEvent}
          session={session}
          errors={errors}/>
      );
    }
  }

  render() {
    const { eventDetail } = this.props;

    window.scrollTo(0,0);

    return (
      <div className="event-detail-container">
        <header className="event-detail-header">
          <img src={`${eventDetail.image}`} className="event-image"/>
          <div className="hero-event-detail">
            <h1 className="event-title">{eventDetail.title}</h1>
            <p>Hosted by: {eventDetail.organizer}</p>
            <aside>
              <p>{moment(eventDetail.date).format('MMM Do YYYY')}</p>
              <p>{eventDetail.location}</p>
              <p>${eventDetail.ticket_price}</p>
              <div>{this.editButton()}</div>
            </aside>
          </div>
        </header>
        <div className="ticket-bar">
          <img
            src="http://res.cloudinary.com/db08acmvn/image/upload/v1495225777/bookmark_kdhxda.png"
            alt="bookmark"
            className="bookmark"/>
          <button className="ticket-button">TICKETS</button>
        </div>
        <div className="main-detail-container">
          <div className="event-description">
            <h1>Description</h1>
            <p>{eventDetail.description}</p>
          </div>
          <aside className="event-detail">
            <ul>
              <li>Date:<br/> {moment(eventDetail.date).format('MMM Do YYYY')}</li>
              <li>Location:<br/>{eventDetail.location}</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default EventDetail;
