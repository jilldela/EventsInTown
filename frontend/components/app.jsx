import React from 'react';
import { Link, Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header className="nav-bar">
      <h1 className="nav-logo">
        <Link to="/">
          EventsInTown
        </Link>
      </h1>
      <NavBarContainer />
    </header>
  </div>
);

export default App;
