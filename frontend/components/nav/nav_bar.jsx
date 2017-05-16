import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogIn() {
    this.props.requestLogIn({username: 'guest', password: 'password'});
  }

  handleLogOut() {
    this.props.requestLogOut();
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <nav className="session-links">
          <ul>
            <li><Link to="/api/events">Browse Events</Link></li>
            <li><Link to={`/api/users/${currentUser.id}`}>{currentUser.username}</Link></li>
            <li><button className="session-button" onClick={this.handleLogOut}>Log Out</button></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="session-links">
          <ul>
            <li>
              <button className="session-button" onClick={this.handleLogIn}>
                Demo
              </button>
            </li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign up!</Link></li>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
