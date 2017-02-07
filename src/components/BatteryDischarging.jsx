import React, { PropTypes } from 'react';
import BatteryLevel from './BatteryLevel';

import {
	batteryDischarging,
} from './styles';

const BatteryDischarging = ({
	level,
	...props
}) => (
	<div className={ batteryDischarging } { ...props }>
		<BatteryLevel level={ level } />
	</div>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
