// react
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// redux
import { Provider } from 'react-redux';
import store from './Redux/Store/store'
// auth
import AuthProvider from './AuthProvider';
// app
import Routes from './Routes';
import './Assets/Styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
