import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<h1>React!</h1>, root);
});




// TODO: for testing only!

import * as Actions from './actions/session_actions';

window.requestSignUp = Actions.requestSignUp;
window.requestLogIn = Actions.requestLogIn;
window.requestLogOut = Actions.requestLogOut;
