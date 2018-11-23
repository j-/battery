import React from 'react';
import PropTypes from 'prop-types';
import BatteryLevel from './BatteryLevel';

const BatteryCharging = ({ level }) => (
	<div className="BatteryCharging">
		<BatteryLevel level={ level } />
	</div>
);

BatteryCharging.propTypes = {
	level: PropTypes.number,
};

export default BatteryCharging;
