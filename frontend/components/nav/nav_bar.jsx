import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-links">
    <ul>
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign up!</Link></li>
    </ul>
  </nav>
);

const signedIn = (currentUser, requestLogOut) => (
  <nav className="session-links">
    <ul>
      <li><Link to="/api/events">Browse Events</Link></li>
      <li><Link to={`/api/users/${currentUser.id}`}>{currentUser.username}</Link></li>
      <li><button className="logout-button">Log Out</button></li>
    </ul>
  </nav>
);

const NavBar = ({ currentUser, requestLogOut }) => (
  currentUser ? signedIn(currentUser, requestLogOut) : sessionLinks()
);

export default NavBar;
