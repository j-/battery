import React, { PropTypes } from 'react';
import BatteryText from './BatteryText';

import {
	batteryLevel,
} from './styles';

const BatteryLevel = ({
	level,
	...props
}) => (
	<BatteryText className={ batteryLevel } { ...props }>
		{ `${level * 100}%` }
	</BatteryText>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
