import * as React from 'react';

export interface Props {
	level: number | null;
	charging: boolean | null;
}

const DEFAULT_COLOR = '#222';

const saturation = 60;
const lightness = 80;

/**
 * Converts a battery level value to a hue value
 * @param level Battery level value from 0-1
 * @returns Hue value between 0-360
 */
const getHueForLevel = (level: number) => {
	if (level < 0.25) {
		return (level / 0.25) * 50;
	} else {
		return 50 + ((level - 0.25) / 0.75) * 60;
	}
};

/**
 * Converts a battery level value to a hex color
 * @param level Battery level value from 0-1
 * @returns HSL color in the format hsl(hue, saturation%, lightness%)
 */
const getColorForLevel = (level: number) => {
	const hue = getHueForLevel(level);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default class Color extends React.PureComponent<Props> {
	render () {
		const { level, charging, children } = this.props;
		const color = level !== null ? getColorForLevel(level) : DEFAULT_COLOR;
		const style = {
			backgroundColor: charging ? color : DEFAULT_COLOR,
			color: charging ? DEFAULT_COLOR : color,
		};
		this.renderBackground(color);
		this.renderFavicon(color);
		this.renderThemeColor(color);
		return (
			<div className="Color" style={style}>
				{children}
			</div>
		);
	}

	private renderBackground (color: string) {
		document.body.style.backgroundColor = color;
	}

	private renderFavicon (color: string) {
		const canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
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
		(document.head as HTMLHeadElement).appendChild(icon);
	}

	private renderThemeColor (color: string) {
		const meta = document.createElement('meta');
		meta.name = 'theme-color';
		meta.content = color;
		const previous = document.querySelector('meta[name=theme-color]');
		if (previous) {
			previous.remove();
		}
		(document.head as HTMLHeadElement).appendChild(meta);
	}
}
