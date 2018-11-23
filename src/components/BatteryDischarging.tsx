import * as React from 'react';
import BatteryLevel from '../containers/BatteryLevel';

const BatteryDischarging: React.FunctionComponent = () => (
	<div className="BatteryDischarging">
		<BatteryLevel />
	</div>
);

export default BatteryDischarging;
