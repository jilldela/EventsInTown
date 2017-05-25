import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.requestLogIn({username: 'Jill', password: 'password'});
  }

  handleLogOut() {
    this.props.requestLogOut()
      .then(this.props.history.push(`/`));
  }

  render() {
    const { currentUser, requestSignUp, requestLogIn } = this.props;

    if (currentUser) {
      return (
        <nav className="session-links">
          <ul>
            <li><Link to="/categories" className="login-links">Browse Events</Link></li>
            <li><EventFormContainer type="Create An Event"/></li>
            <li>
              <Link to={`/users/${currentUser.id}/events`} className="login-links">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                {currentUser.username}
              </Link>
            </li>
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
                Demo
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

export default withRouter(NavBar);
