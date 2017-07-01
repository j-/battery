import React from 'react';
import { storiesOf } from '@storybook/react';
import background from './decorators/background';
import BatteryFull from '../src/components/BatteryFull';

storiesOf('BatteryFull', module)
	.addDecorator(background)
	.add('default', () => (
		<BatteryFull />
	));
