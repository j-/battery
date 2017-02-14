import React from 'react';

import {
	batteryFull,
} from './styles';

const BatteryFull = ({
	...props
}) => (
	<div className={ batteryFull } { ...props } />
);

export default BatteryFull;
