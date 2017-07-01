import React from 'react';
import BatteryText from './BatteryText';

import {
	batteryFull,
} from './styles';

const BatteryFull = ({
	...props
}) => (
	<div className={ batteryFull } { ...props }>
		<BatteryText>
			Full
		</BatteryText>
	</div>
);

export default BatteryFull;
