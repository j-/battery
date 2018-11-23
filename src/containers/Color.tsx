import { connect, MapStateToProps } from 'react-redux';
import Color from '../components/Color';
import { RootReducerState, getBatteryLevel, isBatteryCharging } from '../store';

interface StateProps {
	level: number | null;
	charging: boolean | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	level: getBatteryLevel(state),
	charging: isBatteryCharging(state),
});

export default connect(
	mapStateToProps,
)(Color);
