import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import EventIndexItem from '../events/event_index_item';
import UserHeader from '../user/user_header';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.userEvents = this.userEvents.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  renderComponent() {
    const { id } = this.props.currentUser;
    const { pathname } = this.props.location;

    if (pathname === `/users/${id}/tickets`) {
      return this.props.userTickets;
    } else if (pathname === `/users/${id}/events`) {
      return this.props.userHosted;
    } else if (pathname === `/users/${id}/bookmarks`) {
      return this.props.userBookmarks;
    }
  }

  userEvents() {
    const events = this.renderComponent();

    if (events) {
      return (
          <div className="user-events">
            {events.map((eventDetail, idx) => (
              <EventIndexItem
                key={`eventDetail-${idx}`}
                eventDetail={eventDetail} />
            ))}
          </div>
      );
    }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="user-page-container">
        <UserHeader currentUser={currentUser} />
        {this.userEvents()}
      </div>
    );

  }
}

export default withRouter(UserPage);
