import { connect } from 'react-redux';
import Battery from './Battery';

import {
	isBatteryCharging,
	getBatteryLevel,
} from '../reducer';

const connectStateToProps = (state) => ({
	charging: isBatteryCharging(state),
	level: getBatteryLevel(state),
});

const connectDispatchToProps = null;

export default connect(
	connectStateToProps,
	connectDispatchToProps
)(Battery);
