import React from 'react';
import { Link, Route } from 'react-router-dom';

import Footer from './home/footer';
import HeroImage from './home/hero';
import EventBrowse from './pages/event_browse';
import CategoryBrowse from './pages/category_browse';
import NavBarContainer from './nav/nav_bar_container';
import UserContainer from './user/user_container';
import SessionFormContainer from './session/session_form_container';
import CarouselContainer from './events/carousel_container';
import EventDetailContainer from './events/event_detail_container';
import CategoryIndexContainer from './categories/category_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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

    <Route exact path="/categories" component={EventBrowse} />
    <Route exact path="/categories/:name" component={CategoryBrowse} />

    <Route exact path="/events/:eventId" component={EventDetailContainer} />

    <ProtectedRoute path="/users/:id" component={UserContainer} />

    <Route path="/" component={Footer} />
  </div>
);

export default App;
