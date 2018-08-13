import actionTypes from '../constants/actionTypes';

export function incrementNum(payload) {
	return {
		type: actionTypes.INCREMENT_NUM,
		payload: payload,
	};
}

export function decrementNum(payload) {
	return {
		type: actionTypes.DECREMENT_NUM,
		payload: payload,
	};
}

export function resetCounter(payload) {
	return {
		type: actionTypes.RESET_NUM,
		payload: payload,
	};
}
