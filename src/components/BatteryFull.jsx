import React from 'react';
import BatteryText from './BatteryText';

import {
	batteryFull,
} from './styles';

const BatteryFull = () => (
	<div className={ batteryFull }>
		<BatteryText>
			Full
		</BatteryText>
	</div>
);

export default BatteryFull;
