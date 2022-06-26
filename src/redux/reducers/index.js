import { combineReducers } from 'redux'

import { users } from './users/users'
import { user } from './users/user'

const rootReducer = combineReducers({
	users: users,
	user: user
})

export default rootReducer
