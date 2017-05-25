import React from 'react';

import EventIndexItem from '../events/event_index_item';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    const events = this.props.user.events;
    console.log(this.props);

    if (events) {
      return (
        <div className="user-events">
          {events.map(eventDetail => (
            <EventIndexItem
              key={`eventDetail-${eventDetail.id}`}
              eventDetail={eventDetail} />
          ))}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default UserPage;
