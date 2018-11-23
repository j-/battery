import * as React from 'react';
import { getColorForLevel, DEFAULT_COLOR } from '../color';

export interface Props {
	level: number | null;
	charging: boolean | null;
}

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
