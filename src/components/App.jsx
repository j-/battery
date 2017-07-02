import React from 'react';
import Battery from './Battery';
import Color from './Color';
import { app } from './styles';

const App = ({
	known,
	charging,
	full,
	level,
}) => (
	<div className={ app }>
		<Battery
			known={ known }
			charging={ charging }
			full={ full }
			level={ level }
		/>
		<Color
			level={ level }
		/>
	</div>
);

export default App;
