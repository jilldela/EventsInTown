import React from 'react';
import { Link } from 'react-router-dom';

import SessionModal from '../session/modal';

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
            <li><Link to="/api/events" className="login-links">Browse Events</Link></li>
            <li><Link to={`/api/users/${currentUser.id}`} className="login-links">{currentUser.username}</Link></li>
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
              <SessionModal type="Sign Up" requestLogIn={requestLogIn}/>
            </li>
            <li>
              <SessionModal type="Log In" requestLogIn={requestLogIn}/>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
