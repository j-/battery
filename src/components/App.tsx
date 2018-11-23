import * as React from 'react';
import StatusTitle from '../containers/StatusTitle';
import Battery from './Battery';
import Color from '../containers/Color';

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
		<StatusTitle />
		<Color>
			<Battery
				known={known}
				charging={charging}
				full={full}
				level={level}
			/>
		</Color>
	</div>
);

export default App;
