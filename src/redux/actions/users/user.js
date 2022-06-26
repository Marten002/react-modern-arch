import { userActionTypes } from '../../reducers/users/user'

export const getAsyncUser = (urlQuery) => {
	return {
		type: userActionTypes.USER_GET_REQUEST,
		data: {
			urlQuery
		}
	}
}

export const postAsyncUser = (data) => {
	return {
		type: userActionTypes.USER_POST_REQUEST,
		data: {
			data
		}
	}
}

export const setUserInitial = () => {
	return {
		type: userActionTypes.USER_INITIAL
	}
}
