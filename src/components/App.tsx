import * as React from 'react';
import StatusTitle from '../containers/StatusTitle';
import Battery from '../containers/Battery';
import Color from '../containers/Color';

const App: React.StatelessComponent = () => (
	<div className="App">
		<StatusTitle />
		<Color>
			<Battery />
		</Color>
	</div>
);

export default App;
