import React from 'react';

const style = {
	backgroundColor: '#222',
	padding: '1em',
};

export default (story) => (
	<div style={style}>
		{story()}
	</div>
);
