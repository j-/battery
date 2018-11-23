import * as React from 'react';
import Battery from './Battery';
import Color from './Color';

export interface Props {
	known: boolean;
	charging: boolean | null;
	full: boolean;
	level: number | null;
}

const App: React.StatelessComponent<Props> = ({
	known,
	charging,
	full,
	level,
}) => (
	<div className="App">
		<Battery
			known={known}
			charging={charging}
			full={full}
			level={level}
		/>
		<Color
			level={level}
		/>
	</div>
);

export default App;
