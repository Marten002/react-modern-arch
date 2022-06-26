import misc from '../index'

export const apiGetUser = async ({ urlQuery }) => {
	const url = `https://jsonplaceholder.typicode.com/users?id=${urlQuery}`
	const response = await misc.get(url)
	return response.data
}

export const apiPostUser = async ({ data }) => {
	const url = `https://jsonplaceholder.typicode.com/users`
	const response = await misc.post(url, data)
	return response.data
}
