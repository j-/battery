import React, { PropTypes } from 'react';
import BatteryLevel from './BatteryLevel';

import {
	batteryDischarging,
} from './styles';

const getColorForLevel = (level) => {
	let value, hue;
	if (level < 0.25) {
		value = level / 0.25;
		hue = value * 50;
	} else {
		value = (level - 0.25) / 0.75
		hue = 50 + value * 60;
	}
	return `hsl(${hue}, 60%, 80%)`;
};

const BatteryDischarging = ({
	level,
	...props
}) => (
	<div
		className={ batteryDischarging }
		style={{ backgroundColor: getColorForLevel(level) }}
		{ ...props }
	>
		<BatteryLevel level={ level } />
	</div>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
