import React, { PropTypes } from 'react';
import BatteryCharging from './BatteryCharging';
import BatteryDischarging from './BatteryDischarging';
import BatteryLevel from './BatteryLevel';

const Battery = ({
	charging,
	level,
	dispatch,
	...props,
}) => {
	const batteryLevel = <BatteryLevel level={ level } />;
	let batteryElement;

	if (charging) {
		batteryElement = (
			<BatteryCharging>
				{ batteryLevel }
			</BatteryCharging>
		);
	} else {
		batteryElement = (
			<BatteryDischarging>
				{ batteryLevel }
			</BatteryDischarging>
		);
	}

	return (
		<div className="battery" { ...props }>
			{ batteryElement }
		</div>
	);
};

Battery.propTypes = {
	charging: PropTypes.bool,
	level: PropTypes.number,
	dispatch: PropTypes.func,
};

export default Battery;
