import { getItem } from '../localStorage/getItem'

export const getToken = () => {
	return getItem('token')
}
