import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
	!known   ? <BatteryUnknown /> :
	full     ? <BatteryFull /> :
	charging ? <BatteryCharging level={ level } /> :
	<BatteryDischarging level={ level } />
);

Battery.propTypes = {
	known: PropTypes.bool,
	charging: PropTypes.bool,
	level: PropTypes.number,
	dispatch: PropTypes.func,
};

export default Battery;
