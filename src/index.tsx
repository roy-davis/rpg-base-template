import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import './Assets/Styles/main.css';

ReactDOM.render(
  <Auth0Provider
    domain="virtualfarm.au.auth0.com"
    clientId="h7cl0U73pFw0Pcmsw1ju3IEd3jraWgna"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
