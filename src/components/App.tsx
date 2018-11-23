import * as React from 'react';
import StatusTitle from '../containers/StatusTitle';
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
		<StatusTitle />
		<Color charging={charging} level={level}>
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
