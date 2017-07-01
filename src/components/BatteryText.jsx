import React from 'react';

import {
	batteryText,
} from './styles';

const BatteryText = ({ children }) => (
	<div className={ batteryText }>
		{ children }
	</div>
);

export default BatteryText;
