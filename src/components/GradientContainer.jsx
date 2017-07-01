import React, { PropTypes } from 'react';

const getColorForLevel = (level) => {
	let value, hue;
	if (level < 0.25) {
		value = level / 0.25;
		hue = value * 50;
	} else {
		value = (level - 0.25) / 0.75
		hue = 50 + value * 60;
	}
	return `hsl(${hue}, 60%, 80%)`;
};

const GradientContainer = ({
	level,
	...props
}) => (
	<div
		style={{ backgroundColor: getColorForLevel(level) }}
		{ ...props }
	/>
);

GradientContainer.propTypes = {
	level: PropTypes.number,
};

export default GradientContainer;
