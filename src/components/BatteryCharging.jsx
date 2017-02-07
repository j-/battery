import React, { PropTypes } from 'react';
import BatteryLevel from './BatteryLevel';

const BatteryCharging = ({
	level,
	...props
}) => (
	<div className="battery-charging" { ...props }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryCharging.propTypes = {
	level: PropTypes.number,
};

export default BatteryCharging;
