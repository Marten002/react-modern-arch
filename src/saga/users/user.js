import { call, put, takeEvery } from 'redux-saga/effects'

import {
	apiGetUser,
	apiPostUser
} from '../../api/users/user'

import { userActionTypes } from '../../redux/reducers/users/user'

function* userGetWorker(action) {
	try {
		const data = yield call(apiGetUser, action.data)

		return yield put({type: userActionTypes.USER_GET_SUCCESS, data: data})
	} catch (error) {
		return yield put({type: userActionTypes.USER_GET_FAILURE, data: error.response.data})
	}
}

function* userPostWorker(action) {
	try {
		const data = yield call(apiPostUser, action.data)

		return yield put({type: userActionTypes.USER_POST_SUCCESS, data: data})
	} catch (error) {
		return yield put({type: userActionTypes.USER_POST_FAILURE, data: error.response.data})
	}
}

export function* watchUserAsync() {
	yield takeEvery(userActionTypes.USER_GET_REQUEST, userGetWorker)
	yield takeEvery(userActionTypes.USER_POST_REQUEST, userPostWorker)
}
