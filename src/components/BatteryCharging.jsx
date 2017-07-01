import React from 'react';
import PropTypes from 'prop-types';
import BatteryLevel from './BatteryLevel';

import {
	batteryCharging,
} from './styles';

const BatteryCharging = ({ level }) => (
	<div className={ batteryCharging }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryCharging.propTypes = {
	level: PropTypes.number,
};

export default BatteryCharging;
