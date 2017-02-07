import React, { PropTypes } from 'react';
import BatteryLevel from './BatteryLevel';

import {
	batteryCharging,
} from './styles';

const BatteryCharging = ({
	level,
	...props
}) => (
	<div className={ batteryCharging } { ...props }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryCharging.propTypes = {
	level: PropTypes.number,
};

export default BatteryCharging;
