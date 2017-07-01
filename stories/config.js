import { configure } from '@storybook/react';

configure(() => {
	require('./BatteryCharging');
	require('./BatteryDischarging');
	require('./BatteryFull');
	require('./BatteryUnknown');
}, module);
