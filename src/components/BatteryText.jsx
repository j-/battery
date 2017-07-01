import React, { PropTypes } from 'react';

import {
	batteryText,
} from './styles';

const BatteryText = ({ ...props }) => (
	<div className={ batteryText } { ...props } />
);

export default BatteryText;
