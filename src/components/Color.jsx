import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_COLOR = '#222';

const saturation = 60;
const lightness = 80;

/**
 * Converts a battery level value to a hue value
 * @param {number} level Battery level value from 0-1
 * @returns {number} Hue value between 0-360
 */
const getHueForLevel = (level) => {
	if (level < 0.25) {
		return (level / 0.25) * 50;
	} else {
		return 50 + ((level - 0.25) / 0.75) * 60;
	}
};

/**
 * Converts a battery level value to a hex color
 * @param {number} level Battery level value from 0-1
 * @returns {string} Hex color in the format #RRGGBB
 */
const getColorForLevel = (level) => {
	const hue = getHueForLevel(level);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default class ColorComponent extends React.Component {
	render () {
		const { level } = this.props;
		const color = level !== null ? getColorForLevel(level) : DEFAULT_COLOR;
		this.renderBackground(color);
		this.renderFavicon(color);
		this.renderThemeColor(color);
		return null;
	}

	renderBackground (color) {
		document.body.style.backgroundColor = color;
	}

	renderFavicon (color) {
		const canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = DEFAULT_COLOR;
		ctx.fillRect(0, 0, 16, 16);
		ctx.fillStyle = color;
		ctx.fillRect(1, 1, 14, 14);
		const icon = document.createElement('link');
		icon.rel = 'shortcut icon';
		icon.href = canvas.toDataURL();
		const previous = document.querySelector('link[rel*=icon]');
		if (previous) {
			previous.remove();
		}
		document.head.appendChild(icon);
	}

	renderThemeColor (color) {
		const meta = document.createElement('meta');
		meta.name = 'theme-color';
		meta.content = color;
		const previous = document.querySelector('meta[name=theme-color]');
		if (previous) {
			previous.remove();
		}
		document.head.appendChild(meta);
	}
}

ColorComponent.propTypes = {
	level: PropTypes.number,
};
