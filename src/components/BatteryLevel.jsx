import React, { PropTypes } from 'react';

import {
	batteryLevel,
} from './styles';

const BatteryLevel = ({
	level,
	...props
}) => (
	<div className={ batteryLevel } { ...props }>
		{ `${level * 100}%` }
	</div>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
