import React from 'react';
import PropTypes from 'prop-types';
import BatteryLevel from './BatteryLevel';

const BatteryDischarging = ({ level }) => (
	<div className="BatteryDischarging">
		<BatteryLevel level={ level } />
	</div>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
