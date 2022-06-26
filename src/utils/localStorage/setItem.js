export const setItem = (name, value) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(name, JSON.stringify(value))
	}
}
