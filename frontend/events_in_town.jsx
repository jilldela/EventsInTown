import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();

  // TODO: for testing only!
  window.store = store;

  ReactDOM.render(<h1>React!</h1>, root);
});




// TODO: for testing only!

import * as Actions from './actions/session_actions';

window.requestSignUp = Actions.requestSignUp;
window.requestLogIn = Actions.requestLogIn;
window.requestLogOut = Actions.requestLogOut;
