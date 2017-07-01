import React from 'react';
import BatteryText from './BatteryText';

import {
	batteryUnknown,
} from './styles';

const BatteryUnknown = () => (
	<div className={ batteryUnknown }>
		<BatteryText>
			?
		</BatteryText>
	</div>
);

export default BatteryUnknown;
