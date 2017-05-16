import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();

  // TODO: for testing only!
  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});




// TODO: for testing only!

import * as Actions from './actions/session_actions';

window.requestSignUp = Actions.requestSignUp;
window.requestLogIn = Actions.requestLogIn;
window.requestLogOut = Actions.requestLogOut;
