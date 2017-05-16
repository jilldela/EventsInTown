import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const signedIn = (currentUser, requestLogOut) => (
  <nav>
    <Link to="/api/events">Browse Events</Link>
    <Link to={`/api/users/${currentUser.id}`}>{currentUser.username}</Link>
    <button className="logout-button">Log Out</button>
  </nav>
);

const NavBar = ({ currentUser, requestLogOut }) => (
  currentUser ? signedIn(currentUser, requestLogOut) : sessionLinks()
);

export default NavBar;
