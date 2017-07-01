import React from 'react';
import { storiesOf } from '@storybook/react';
import background from './decorators/background';
import BatteryDischarging from '../src/components/BatteryDischarging';

storiesOf('BatteryDischarging', module)
	.addDecorator(background)
	.add('100%', () => <BatteryDischarging level={1.0} />)
	.add('90%',  () => <BatteryDischarging level={0.9} />)
	.add('80%',  () => <BatteryDischarging level={0.8} />)
	.add('70%',  () => <BatteryDischarging level={0.7} />)
	.add('60%',  () => <BatteryDischarging level={0.6} />)
	.add('50%',  () => <BatteryDischarging level={0.5} />)
	.add('40%',  () => <BatteryDischarging level={0.4} />)
	.add('30%',  () => <BatteryDischarging level={0.3} />)
	.add('20%',  () => <BatteryDischarging level={0.2} />)
	.add('10%',  () => <BatteryDischarging level={0.1} />)
	.add('0%',   () => <BatteryDischarging level={0.0} />);
