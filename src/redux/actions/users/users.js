import { usersActionTypes } from '../../reducers/users/users'

export const getAsyncUsers = () => {
	return {
		type: usersActionTypes.USERS_GET_REQUEST
	}
}
