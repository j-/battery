import { connect } from 'react-redux';
import Battery from './Battery';

import {
	isBatteryStateKnown,
	isBatteryCharging,
	getBatteryLevel,
} from '../reducer';

const connectStateToProps = (state) => ({
	known: isBatteryStateKnown(state),
	charging: isBatteryCharging(state),
	level: getBatteryLevel(state),
});

const connectDispatchToProps = null;

export default connect(
	connectStateToProps,
	connectDispatchToProps
)(Battery);
