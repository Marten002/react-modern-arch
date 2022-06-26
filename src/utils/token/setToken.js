import { setItem } from '../localStorage/setItem'

import { getToken } from './getToken'

export const setToken = (token) => {
	if (!getToken()) {
		setItem('token', token)
	}
}
