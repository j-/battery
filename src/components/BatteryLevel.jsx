import React, { PropTypes } from 'react';

const BatteryLevel = ({
	level,
	...props
}) => (
	<div className="battery-level" { ...props }>
		{ `${level * 100}%` }
	</div>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
