import misc from '../index'

export const apiGetUsers = async () => {
	const url = `https://jsonplaceholder.typicode.com/users`
	const response = await misc.get(url)
	return response.data
}
