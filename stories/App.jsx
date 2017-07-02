import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/components/App';

storiesOf('App', module)
	.add('full', () => (
		<App
			known={ true }
			charging={ true }
			full={ true }
			level={ 1 }
		/>
	))
	.add('80% charging', () => (
		<App
			known={ true }
			charging={ true }
			full={ false }
			level={ 0.8 }
		/>
	))
	.add('60% discharging', () => (
		<App
			known={ true }
			charging={ false }
			full={ false }
			level={ 0.6 }
		/>
	))
	.add('40% charging', () => (
		<App
			known={ true }
			charging={ true }
			full={ false }
			level={ 0.4 }
		/>
	))
	.add('20% discharging', () => (
		<App
			known={ true }
			charging={ false }
			full={ false }
			level={ 0.2 }
		/>
	))
	.add('0% charging', () => (
		<App
			known={ true }
			charging={ true }
			full={ false }
			level={ 0 }
		/>
	))
	.add('unknown', () => (
		<App
			known={ false }
			charging={ null }
			full={ null }
			level={ null }
		/>
	));
