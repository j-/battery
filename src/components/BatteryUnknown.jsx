import React from 'react';

import {
	batteryUnknown,
} from './styles';

const BatteryUnknown = ({
	...props
}) => (
	<div className={ batteryUnknown } { ...props } />
);

export default BatteryUnknown;
