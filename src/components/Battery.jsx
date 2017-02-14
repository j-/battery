import React, { PropTypes } from 'react';
import BatteryUnknown from './BatteryUnknown';
import BatteryCharging from './BatteryCharging';
import BatteryDischarging from './BatteryDischarging';
import BatteryLevel from './BatteryLevel';
import BatteryFull from './BatteryFull';

const Battery = ({
	known,
	charging,
	full,
	level,
	dispatch,
	...props
}) => {
	if (!known) {
		return (
			<BatteryUnknown { ...props } />
		);
	} else if (full) {
		return (
			<BatteryFull level={ level } { ...props } />
		);
	} else if (charging) {
		return (
			<BatteryCharging level={ level } { ...props } />
		);
	} else {
		return (
			<BatteryDischarging level={ level } { ...props } />
		);
	}
};

Battery.propTypes = {
	known: PropTypes.bool,
	charging: PropTypes.bool,
	level: PropTypes.number,
	dispatch: PropTypes.func,
};

export default Battery;
