// Import polyfills and styles
import 'react-app-polyfill/ie11';
import 'mdbreact/dist/css/mdb.css';
import './scss/main.scss';

// Import frameworks
import React, { StrictMode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './redux';

// Render app with store wrapper
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
