import React, { PropTypes } from 'react';
import GradientContainer from './GradientContainer';
import BatteryLevel from './BatteryLevel';

import {
	batteryCharging,
} from './styles';

const BatteryCharging = ({
	level,
	...props
}) => (
	<GradientContainer
		className={ batteryCharging }
		level={ level }
		{ ...props }
	>
		<BatteryLevel level={ level } />
	</GradientContainer>
);

BatteryCharging.propTypes = {
	level: PropTypes.number,
};

export default BatteryCharging;
