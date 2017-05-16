import React from 'react';
import { Link, Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header className="nav-bar">
      <Link to="/">
        <h1>EventsInTown</h1>
      </Link>
      <NavBarContainer />
    </header>

  </div>
);

export default App;
