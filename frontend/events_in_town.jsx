import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TODO: for testing only!
  window.store = store;

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});



// TODO: for testing only!
import * as Actions from './actions/event_actions';

window.fetchEvents = Actions.fetchEvents;
window.fetchSingleEvent = Actions.fetchSingleEvent;
window.createEvent = Actions.createEvent;
window.updateEvent = Actions.updateEvent;
window.deleteEvent = Actions.deleteEvent;
