import * as React from 'react';
import BatteryUnknown from './BatteryUnknown';
import BatteryCharging from './BatteryCharging';
import BatteryDischarging from './BatteryDischarging';
import BatteryFull from './BatteryFull';

export interface Props {
	known: boolean;
	charging: boolean | null;
	full: boolean;
}

const Battery: React.FunctionComponent<Props> = ({
	known,
	charging,
	full,
}) => (
	// Battery level is unknown
	!known   ? <BatteryUnknown /> :
	// Battery is full
	full     ? <BatteryFull /> :
	// Battery is charging
	charging ? <BatteryCharging /> :
	// Battery is discharging
	<BatteryDischarging />
);

export default Battery;
