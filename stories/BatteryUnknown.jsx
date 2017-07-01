import React from 'react';
import { storiesOf } from '@storybook/react';
import background from './decorators/background';
import BatteryUnknown from '../src/components/BatteryUnknown';

storiesOf('BatteryUnknown', module)
	.addDecorator(background)
	.add('default', () => (
		<BatteryUnknown />
	));
