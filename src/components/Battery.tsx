import * as React from 'react';
import BatteryUnknown from './BatteryUnknown';
import BatteryCharging from './BatteryCharging';
import BatteryDischarging from './BatteryDischarging';
import BatteryFull from './BatteryFull';

export interface Props {
	known: boolean;
	charging: boolean | null;
	full: boolean;
	level: number | null;
}

const Battery: React.FunctionComponent<Props> = ({
	known,
	charging,
	full,
	level,
}) => (
	// Battery level is unknown
	!known   ? <BatteryUnknown /> :
	// Battery is full
	full     ? <BatteryFull /> :
	// Battery is charging
	charging ? <BatteryCharging level={level!} /> :
	// Battery is discharging
	<BatteryDischarging level={level!} />
);

export default Battery;
