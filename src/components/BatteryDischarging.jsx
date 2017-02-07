import React, { PropTypes } from 'react';
import BatteryLevel from './BatteryLevel';

const BatteryDischarging = ({
	level,
	...props
}) => (
	<div className="battery-charging" { ...props }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
