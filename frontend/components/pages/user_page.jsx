import React from 'react';

import EventIndexItem from '../events/event_index_item';
import UserHeader from '../user/user_header';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.userTickets = this.userTickets.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  userTickets() {
    const events = this.props.user.events;

    if (events) {
      return (
        <div>

          <div className="user-events">
            {events.map(eventDetail => (
              <EventIndexItem
                key={`eventDetail-${eventDetail.id}`}
                eventDetail={eventDetail} />
            ))}
          </div>
        </div>
      );
    }
  }

  render() {
    console.log(this.props);
    const { currentUser } = this.props;

    return (
      <div className="user-page-container">
        <UserHeader currentUser={currentUser} />
        {this.userTickets}
      </div>
    );

  }
}

export default UserPage;
