import * as React from 'react';
import BatteryLevel from './BatteryLevel';

export interface Props {
	level: number;
}

const BatteryDischarging: React.FunctionComponent<Props> = ({ level }) => (
	<div className="BatteryDischarging">
		<BatteryLevel level={level} />
	</div>
);

export default BatteryDischarging;
