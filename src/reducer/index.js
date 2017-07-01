import {
	QUERY_BATTERY,
	UPDATE_BATTERY,
} from './types';

const DEFAULT_STATE = {
	querying: false,
	known: false,
	charging: null,
	level: null,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case QUERY_BATTERY:
			return {
				...state,
				querying: true,
			};
		case UPDATE_BATTERY:
			return {
				querying: false,
				known: true,
				charging: action.battery.charging,
				level: action.battery.level,
			};
		default:
			return state;
	}
};

export const isBatteryFull = (state) => (
	getBatteryLevel(state) >= 1
);
export const isBatteryStateQuerying = (state) => state.querying;
export const isBatteryStateKnown = (state) => state.known;
export const isBatteryCharging = (state) => state.charging;
export const getBatteryLevel = (state) => state.level;
