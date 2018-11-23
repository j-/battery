export const DEFAULT_COLOR = '#222';

const SATURATION = 60;
const LIGHTNESS = 80;

/**
 * Converts a battery level value to a hue value
 * @param level Battery level value from 0-1
 * @returns Hue value between 0-360
 */
export const getHueForLevel = (level: number) => {
	if (level < 0.25) {
		return (level / 0.25) * 50;
	} else {
		return 50 + ((level - 0.25) / 0.75) * 60;
	}
};

/**
 * Converts a battery level value to a HSL color
 * @param level Battery level value from 0-1
 * @returns HSL color in the format `hsl(hue, saturation%, lightness%)`
 */
export const getColorForLevel = (level: number) => {
	const hue = getHueForLevel(level);
	return `hsl(${hue}, ${SATURATION}%, ${LIGHTNESS}%)`;
};
