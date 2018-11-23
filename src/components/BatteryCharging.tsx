import * as React from 'react';
import BatteryLevel from '../containers/BatteryLevel';

const BatteryCharging: React.FunctionComponent = () => (
	<div className="BatteryCharging">
		<BatteryLevel />
	</div>
);

export default BatteryCharging;
