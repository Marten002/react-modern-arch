export const getItem = (key) => {
	if (typeof window !== 'undefined') {
		return JSON.parse(window.localStorage.getItem(key))
	}
}
