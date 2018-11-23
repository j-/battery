import * as React from 'react';
import BatteryLevel from './BatteryLevel';

export interface Props {
	level: number;
}

const BatteryCharging: React.StatelessComponent<Props> = ({ level }) => (
	<div className="BatteryCharging">
		<BatteryLevel level={level} />
	</div>
);

export default BatteryCharging;
