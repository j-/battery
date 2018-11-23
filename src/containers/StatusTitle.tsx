import { connect, MapStateToProps } from 'react-redux';
import DocumentTitle from 'react-document-title';
import { RootReducerState, getBatteryStatusSummary } from '../store';

interface StateProps {
	title: string;
}

const mapStateToProps: MapStateToProps<StateProps, {}, RootReducerState> = (state) => ({
	title: getBatteryStatusSummary(state),
});

export default connect(
	mapStateToProps,
)(DocumentTitle);
