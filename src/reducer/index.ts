import { Reducer } from 'redux';

import {
	QUERY_BATTERY,
	UPDATE_BATTERY,
} from './types';

export interface RootReducerState {
	querying: boolean;
	known: boolean;
	charging: boolean | null;
	level: number | null;
}

const DEFAULT_STATE = {
	querying: false,
	known: false,
	charging: null,
	level: null,
};

const reducer: Reducer<RootReducerState> = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case QUERY_BATTERY:
			return {
				...state,
				querying: true,
			};
		case UPDATE_BATTERY:
			const battery: BatteryManager = action.battery;
			return {
				querying: false,
				known: true,
				charging: battery.charging,
				level: battery.level,
			};
		default:
			return state;
	}
};

export default reducer;

export const isBatteryFull = (state: RootReducerState) => (
	isBatteryStateKnown(state) && getBatteryLevel(state)! >= 1
);
export const isBatteryStateQuerying = (state: RootReducerState) => state.querying;
export const isBatteryStateKnown = (state: RootReducerState) => state.known;
export const isBatteryCharging = (state: RootReducerState) => state.charging;
export const getBatteryLevel = (state: RootReducerState) => state.level;
