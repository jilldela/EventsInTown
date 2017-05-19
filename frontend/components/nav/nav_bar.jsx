import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from '../session/session_form_container';
import EventFormContainer from '../events/event_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

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
    const { currentUser, requestSignUp, requestLogIn } = this.props;

    if (currentUser) {
      return (
        <nav className="session-links">
          <ul>
            <li><Link to="/events" className="login-links">Browse Events</Link></li>
            <li><EventFormContainer type="Create An Event"/></li>
            <li><Link to={`/users/${currentUser.id}`} className="login-links">{currentUser.username}</Link></li>
            <li><button className="session-button" onClick={this.handleLogOut}>
              Log Out
            </button></li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="session-links">
          <ul>
            <li>
              <button className="session-button" onClick={this.handleLogIn}>
                Guest Log In
              </button>
            </li>
            <li>
              <SessionFormContainer type="Sign Up"/>
            </li>
            <li>
              <SessionFormContainer type="Log In"/>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
