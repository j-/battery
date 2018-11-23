import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import App from './containers/App';
import reducer from './reducer';
import { queryBattery, updateBattery } from './reducer/actions';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer, composeWithDevTools());
const BATTERY_UPDATE_INTERVAL = 1000 * 10; // 10s

ReactDOM.render(
	<StoreProvider store={ store }>
		<App />
	</StoreProvider>,
	document.getElementById('root')
);

registerServiceWorker();

store.dispatch(
	queryBattery()
);

(async () => {
	try {
		const battery = await navigator.getBattery();
		const handler = () => {
			store.dispatch(
				updateBattery(battery)
			);
		};
		// Update whenever the browser notifies us of changes
		battery.addEventListener('chargingchange', handler);
		battery.addEventListener('levelchange', handler);
		// Update periodically
		setInterval(handler, BATTERY_UPDATE_INTERVAL);
		// Update immediately
		handler();
	} catch (err) {
		console.error('Error fetching battery stats: ' + err.message);
	}
})();
