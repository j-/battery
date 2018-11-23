import React from 'react';
import Battery from './Battery';
import Color from './Color';

const App = ({
	known,
	charging,
	full,
	level,
}) => (
	<div className="App">
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
