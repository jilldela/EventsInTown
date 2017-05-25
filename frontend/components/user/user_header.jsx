import React from 'react';
import { Link } from 'react-router-dom';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="user-nav-container">
        <header className="user-page-header">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          {currentUser.username}
        </header>
        <nav className="user-links">
          <ul>
            <li><Link to={`/users/${currentUser.id}/bookmarks`}>Your Bookmarks</Link></li>
            <li><Link to={`/users/${currentUser.id}/events`}>Hosted Events By You</Link></li>
            <li><Link to={`/users/${currentUser.id}/tickets`}>Your Tickets</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default UserHeader;
