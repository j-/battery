import React, { PropTypes } from 'react';
import GradientContainer from './GradientContainer';
import BatteryLevel from './BatteryLevel';

import {
	batteryDischarging,
} from './styles';

const BatteryDischarging = ({
	level,
	...props
}) => (
	<GradientContainer
		className={ batteryDischarging }
		level={ level }
		{ ...props }
	>
		<BatteryLevel level={ level } />
	</GradientContainer>
);

BatteryDischarging.propTypes = {
	level: PropTypes.number,
};

export default BatteryDischarging;
