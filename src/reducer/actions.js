import {
	QUERY_BATTERY,
	SET_BATTERY,
} from './types';

export const queryBattery = () => ({
	type: QUERY_BATTERY,
});

export const setBattery = (battery) => ({
	type: SET_BATTERY,
	battery,
});
