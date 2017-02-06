import React, { PropTypes } from 'react';
import BatteryLevelKnown from './BatteryLevelKnown';
import BatteryLevelUnknown from './BatteryLevelUnknown';

const BatteryLevel = ({
	level,
	...props,
}) => (
	<div className="battery-level" { ...props }>
		{ level !== null ?
			<BatteryLevelKnown level={ level } /> :
			<BatteryLevelUnknown />
		}
	</div>
);

BatteryLevel.propTypes = {
	level: PropTypes.number,
};

export default BatteryLevel;
