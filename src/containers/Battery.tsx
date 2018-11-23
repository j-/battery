import { connect, MapStateToProps } from 'react-redux';
import Battery, { Props } from '../components/Battery';

import {
	isBatteryFull,
	isBatteryStateKnown,
	isBatteryCharging,
	getBatteryLevel,
	RootReducerState,
} from '../store';

const mapStateToProps: MapStateToProps<Props, {}, RootReducerState> = (state) => ({
	known: isBatteryStateKnown(state),
	charging: isBatteryCharging(state),
	full: isBatteryFull(state),
	level: getBatteryLevel(state),
});

export default connect(
	mapStateToProps,
)(Battery);
