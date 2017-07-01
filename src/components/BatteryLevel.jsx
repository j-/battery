import React from 'react';
import PropTypes from 'prop-types';
import BatteryText from './BatteryText';

import {
	batteryLevel,
} from './styles';

const BatteryLevel = ({ level }) => (
	<BatteryText className={ batteryLevel }>
		{ `${Math.round(level * 100)}%` }
	</BatteryText>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
