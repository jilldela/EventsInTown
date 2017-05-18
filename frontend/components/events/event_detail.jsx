import React from 'react';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleEvent(this.props.match.params.eventId);
  }

  render() {
    const { eventDetail } = this.props;

    return (
      <div className="event-detail-container">
        <header className="event-detail-header">
          <img src={`${eventDetail.image}`} className="event-image"/>
          <div className="hero-event-detail">
            <h1 className="event-title">{eventDetail.title}</h1>
            <p>{eventDetail.date}</p>
            <aside>
              <p>{eventDetail.location}</p>
              <p>${eventDetail.ticket_price}</p>
            </aside>
          </div>
        </header>
        <div className="ticket-bar">
          <img src="assets/bookmark.png" alt="bookmark" className="bookmark"/>
          <button className="ticket-button">TICKETS</button>
        </div>
        <div className="main-detail-container">
          <div className="event-description">
            <label>
              <h1>Description</h1>
              <p>{eventDetail.description}</p>
            </label>
          </div>
          <aside>
            <ul className="event-detail">
              <li>{eventDetail.location}</li>
              <li>{eventDetail.date}</li>
              <li>{eventDetail.time}</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default EventDetail;
