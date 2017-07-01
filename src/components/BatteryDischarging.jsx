import React from 'react';
import PropTypes from 'prop-types';
import BatteryLevel from './BatteryLevel';

import {
	batteryDischarging,
} from './styles';

const BatteryDischarging = ({ level }) => (
	<div className={ batteryDischarging }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
