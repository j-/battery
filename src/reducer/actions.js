import {
	QUERY_BATTERY,
	UPDATE_BATTERY,
} from './types';

export const queryBattery = () => ({
	type: QUERY_BATTERY,
});

export const updateBattery = (battery) => ({
	type: UPDATE_BATTERY,
	battery,
});
