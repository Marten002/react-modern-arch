export const userActionTypes = {
	USER_GET_REQUEST: 'USER_GET_REQUEST',
	USER_GET_SUCCESS: 'USER_GET_SUCCESS',
	USER_GET_FAILURE: 'USER_GET_FAILURE',

	USER_POST_REQUEST: 'USER_POST_REQUEST',
	USER_POST_SUCCESS: 'USER_POST_SUCCESS',
	USER_POST_FAILURE: 'USER_POST_FAILURE',

	USER_INITIAL: 'USER_INITIAL'
}

const initialState = {
	userGetIsFetching: false,
	userGetSuccess: null,
	userGetFailure: null,

	userPostIsFetching: false,
	userPostSuccess: null,
	userPostFailure: null
}

export function user(state = initialState, action) {
	switch (action.type) {
		case userActionTypes.USER_GET_REQUEST:
			return {
				...state,
				userGetIsFetching: true,
				userGetSuccess: null,
				userGetFailure: null
			}
		case userActionTypes.USER_GET_SUCCESS:
			return {
				...state,
				userGetIsFetching: false,
				userGetSuccess: action.data
			}
		case userActionTypes.USER_GET_FAILURE:
			return {
				...state,
				userGetIsFetching: false,
				userGetFailure: action.data
			}

		// POST
		case userActionTypes.USER_POST_REQUEST:
			return {
				...state,
				userPostIsFetching: true,
				userPostSuccess: null,
				userPostFailure: null
			}
		case userActionTypes.USER_POST_SUCCESS:
			return {
				...state,
				userPostIsFetching: false,
				userPostSuccess: action.data
			}
		case userActionTypes.USER_POST_FAILURE:
			return {
				...state,
				userPostIsFetching: false,
				userPostFailure: action.data
			}

		// Initial state (очищает редакс если нужно)
		case userActionTypes.USER_INITIAL:
			return {
				...initialState
			}

		default:
			return state
	}
}
