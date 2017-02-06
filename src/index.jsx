import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { getBattery, setBattery } from './reducer/actions';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={ store }>
		<div />
	</Provider>,
	document.getElementById('app')
);

store.dispatch(
	getBattery()
);

navigator.getBattery().then((battery) => {
	store.dispatch(
		setBattery(battery)
	);

	battery.addEventListener('chargingchange', () => {
		store.dispatch(
			setBattery(battery)
		);
	});

	battery.addEventListener('levelchange', () => {
		store.dispatch(
			setBattery(battery)
		);
	});
});
