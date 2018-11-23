import * as React from 'react';
import BatteryText from './BatteryText';

export interface Props {
	level: number;
}

const BatteryLevel: React.FunctionComponent<Props> = ({ level }) => (
	<BatteryText>
		{`${Math.round(level * 100)}%`}
	</BatteryText>
);

export default BatteryLevel;
