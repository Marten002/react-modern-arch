export const usersActionTypes = {
	USERS_GET_REQUEST: 'USERS_GET_REQUEST',
	USERS_GET_SUCCESS: 'USERS_GET_SUCCESS',
	USERS_GET_FAILURE: 'USERS_GET_FAILURE',
}

const initialState = {
	usersGetIsFetching: false,
	usersGetSuccess: null,
	usersGetFailure: null
}

export function users(state = initialState, action) {
	switch (action.type) {
		case usersActionTypes.USERS_GET_REQUEST:
			return {
				...state,
				usersGetIsFetching: true
			}
		case usersActionTypes.USERS_GET_SUCCESS:
			return {
				...state,
				usersGetIsFetching: false,
				usersGetSuccess: action.data
			}
		case usersActionTypes.USERS_GET_FAILURE:
			return {
				...state,
				usersGetIsFetching: false,
				usersGetFailure: action.data
			}

		default:
			return state
	}
}
