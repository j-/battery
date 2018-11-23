import { connect } from 'react-redux';
import App from '../components/App';

import {
	isBatteryFull,
	isBatteryStateKnown,
	isBatteryCharging,
	getBatteryLevel,
} from '../store';

const connectStateToProps = (state) => ({
	known: isBatteryStateKnown(state),
	charging: isBatteryCharging(state),
	full: isBatteryFull(state),
	level: getBatteryLevel(state),
});

export default connect(
	connectStateToProps,
)(App);
