import React from 'react';
import { storiesOf } from '@storybook/react';
import background from './decorators/background';
import BatteryCharging from '../src/components/BatteryCharging';

storiesOf('BatteryCharging', module)
	.addDecorator(background)
	.add('100%', () => (
		<BatteryCharging level={1} />
	))
	.add('80%', () => (
		<BatteryCharging level={0.8} />
	))
	.add('60%', () => (
		<BatteryCharging level={0.6} />
	))
	.add('40%', () => (
		<BatteryCharging level={0.4} />
	))
	.add('20%', () => (
		<BatteryCharging level={0.2} />
	))
	.add('0%', () => (
		<BatteryCharging level={0} />
	));
