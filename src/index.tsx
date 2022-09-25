// Import polyfills and styles
import 'react-app-polyfill/ie11';
import 'mdbreact/dist/css/mdb.css';
import './scss/main.scss';

// Import frameworks
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux';

// Render app with store wrapper
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
