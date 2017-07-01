import React from 'react';
import BatteryText from './BatteryText';

import {
	batteryUnknown,
} from './styles';

const BatteryUnknown = ({
	...props
}) => (
	<div className={ batteryUnknown } { ...props }>
		<BatteryText>
			?
		</BatteryText>
	</div>
);

export default BatteryUnknown;
