import React from 'react';
import PropTypes from 'prop-types';
import BatteryText from './BatteryText';

const BatteryLevel = ({ level }) => (
	<BatteryText className="BatteryLevel">
		{ `${Math.round(level * 100)}%` }
	</BatteryText>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
