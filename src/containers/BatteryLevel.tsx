import { connect, MapStateToProps } from 'react-redux';
import BatteryText from '../components/BatteryText';
import { RootReducerState, getBatteryPercent } from '../store';

interface StateProps {
	children: string | null;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	children: getBatteryPercent(state),
});

export default connect(
	mapStateToProps,
)(BatteryText);
