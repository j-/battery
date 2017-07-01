import React from 'react';
import { storiesOf } from '@storybook/react';
import background from './decorators/background';
import BatteryDischarging from '../src/components/BatteryDischarging';

storiesOf('BatteryDischarging', module)
	.addDecorator(background)
	.add('100%', () => (
		<BatteryDischarging level={1} />
	))
	.add('80%', () => (
		<BatteryDischarging level={0.8} />
	))
	.add('60%', () => (
		<BatteryDischarging level={0.6} />
	))
	.add('40%', () => (
		<BatteryDischarging level={0.4} />
	))
	.add('20%', () => (
		<BatteryDischarging level={0.2} />
	))
	.add('0%', () => (
		<BatteryDischarging level={0} />
	));
