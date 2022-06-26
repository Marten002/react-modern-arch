import { call, put, takeEvery } from 'redux-saga/effects'

import {
	apiGetUsers
} from '../../api/users/users'

import { usersActionTypes } from '../../redux/reducers/users/users'

function* usersGetWorker(action) {
	try {
		const data = yield call(apiGetUsers, action.data)

		return yield put({type: usersActionTypes.USERS_GET_SUCCESS, data: data})
	} catch (error) {
		return yield put({type: usersActionTypes.USERS_GET_FAILURE, data: error.response.data})
	}
}

export function* watchUsersAsync() {
	yield takeEvery(usersActionTypes.USERS_GET_REQUEST, usersGetWorker)
}
