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
    this.props.fetchUser(this.props.currentUser.id);
    window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.location.pathname !== this.props.location.pathname){
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  renderComponent() {
    const { id } = this.props.currentUser;
    const { pathname } = this.props.location;

    if (pathname === `/users/${id}/tickets`) {
      return this.props.userTickets;
    } else if (pathname === `/users/${id}/events`) {
      return this.props.userHosted;
    }
  }

  userEvents() {
    const events = this.renderComponent();

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
