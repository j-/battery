import * as React from 'react';
import BatteryText from './BatteryText';

const BatteryUnknown: React.FunctionComponent = () => (
	<div className="BatteryUnknown">
		<BatteryText>
			?
		</BatteryText>
	</div>
);

export default BatteryUnknown;
