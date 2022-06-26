import {  all  } from 'redux-saga/effects'

import { watchUsersAsync } from './users/users'
import { watchUserAsync } from './users/user'

export default function* sagas() {
    yield all([
		watchUsersAsync(),
		watchUserAsync()
    ])
}
