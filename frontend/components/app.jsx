import React from 'react';
import { Link, Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import EventIndexContainer from './events/event_index_container';
import EventDetailContainer from './events/event_detail_container';

const App = () => (
  <div>
    <header className="nav-bar">
      <h1>
        <Link to="/" className="nav-logo">
          EventsInTown
        </Link>
      </h1>
      <NavBarContainer />
    </header>
    <div className="hero-image-container">
      <img
        src="https://images.pexels.com/photos/2143/lights-party-dancing-music.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
        alt="event-image"/>
    </div>
    <EventIndexContainer />

    <Route exact path="/events/:eventId" component={EventDetailContainer} />
  </div>
);

export default App;
