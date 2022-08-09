// import polyfills and styles
import 'react-app-polyfill/ie11';
import 'mdbreact/dist/css/mdb.css';
import './scss/main.scss';

// import frameworks
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux';
import App from './App';

// render app
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
