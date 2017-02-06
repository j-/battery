import React, { PropTypes } from 'react';

const BatteryLevelKnown = ({
	level,
	...props,
}) => (
	<div className="battery-level-known" { ...props }>
		{ `${level * 100}%` }
	</div>
);

BatteryLevelKnown.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevelKnown;
