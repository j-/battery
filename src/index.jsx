import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import { getBattery, setBattery } from './reducer/actions';

import './main';

const store = createStore(reducer, composeWithDevTools());
const BATTERY_UPDATE_INTERVAL = 1000 * 10; // 10s

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);

store.dispatch(
	getBattery()
);

navigator.getBattery().then((battery) => {
	const updateBattery = () => {
		store.dispatch(
			setBattery(battery)
		);
	};
	// Update whenever the browser notifies us of changes
	battery.addEventListener('chargingchange', updateBattery);
	battery.addEventListener('levelchange', updateBattery);
	// Update periodically
	setInterval(updateBattery, BATTERY_UPDATE_INTERVAL);
	// Update immediately
	updateBattery();
}).catch((err) => {
	console.error('Error fetching battery stats: ' + err.message);
});
