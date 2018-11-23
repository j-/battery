import {
	QUERY_BATTERY,
	UPDATE_BATTERY,
} from './types';

export const queryBattery = () => ({
	type: QUERY_BATTERY,
});

export const updateBattery = (battery: BatteryManager) => ({
	type: UPDATE_BATTERY,
	battery,
});
