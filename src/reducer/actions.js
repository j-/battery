import {
	GET_BATTERY,
	SET_BATTERY,
} from './types';

export const getBattery = () => ({
	type: GET_BATTERY,
});

export const setBattery = (battery) => ({
	type: SET_BATTERY,
	battery,
});
