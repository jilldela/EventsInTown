import React from 'react';

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
    const { eventDetail, session, updateEvent, errors } = this.props;

    if (eventDetail.organizer && (session.currentUser.id === eventDetail.organizer_id)) {
      return (
        <EditModal
          updateEvent={updateEvent}
          eventDetail={eventDetail}
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
            <p><Moment date={eventDetail.date}/></p>
            <aside>
              <p>{eventDetail.organizer}</p>
              <p>{eventDetail.location}</p>
              <p>${eventDetail.ticket_price}</p>
              <div>{this.editButton()}</div>
            </aside>
          </div>
        </header>
        <div className="ticket-bar">
          <img src="assets/bookmark.png" alt="bookmark" className="bookmark"/>
          <button className="ticket-button">TICKETS</button>
        </div>
        <div className="main-detail-container">
          <div className="event-description">
            <h1>Description</h1>
            <p>{eventDetail.description}</p>
          </div>
          <aside>
            <ul className="event-detail">
              <li>{eventDetail.location}</li>
              <li><Moment date={eventDetail.date}/></li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default EventDetail;
