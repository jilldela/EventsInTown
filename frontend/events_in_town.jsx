import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<h1>React!</h1>, root);
});




// TODO: for testing only!

import * as APIUtil from './util/session_api_util';

window.signup = APIUtil.signup;
window.login = APIUtil.login;
window.logout = APIUtil.logout;
