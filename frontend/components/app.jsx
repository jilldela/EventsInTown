import React from 'react';
import { Link, Route } from 'react-router-dom';

import Footer from './home/footer';
import HeroImage from './home/hero';
import CategoryList from './categories/category_list';
import NavBarContainer from './nav/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import CarouselContainer from './events/carousel_container';
import EventIndexContainer from './events/event_index_container';
import EventDetailContainer from './events/event_detail_container';
import CategoryIndexContainer from './categories/category_index_container';
import CategoryEventsContainer from './categories/category_events_container';

const App = () => (
  <div className="app">
    <header className="nav-bar">
      <h1>
        <Link to="/" className="nav-logo">
          EventsInTown
        </Link>
      </h1>
      <Route path="/" component={NavBarContainer} />
    </header>

    <Route exact path="/" component={HeroImage} />
    <Route exact path="/" component={CarouselContainer} />
    <Route exact path="/" component={CategoryIndexContainer} />

    <Route exact path="/events" component={EventIndexContainer} />
    <Route exact path="/events/:eventId" component={EventDetailContainer} />
    <Route path="/categories" component={CategoryList} />
    <Route exact path="/categories/:name" component={CategoryEventsContainer} />

    <Route path="/" component={Footer} />
  </div>
);

export default App;
