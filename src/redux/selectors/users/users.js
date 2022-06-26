import { createSelector } from 'reselect'

// GET

const usersGetIsFetchingSelector = (state) => {
	return state.users.usersGetIsFetching
}

export const usersGetIsFetchingSelectorReselect = createSelector(
	usersGetIsFetchingSelector,
	usersGetIsFetching => usersGetIsFetching
)

const usersGetSuccessSelector = (state) => {
	return state.users.usersGetSuccess
}

export const usersGetSuccessSelectorReselect = createSelector(
	usersGetSuccessSelector,
	usersGetSuccess => {
		let data = []

		if (usersGetSuccess) {
			usersGetSuccess.forEach(item => {
				data.push({
					id: item.id,
					name: item.name,
					email: item.email
				})
			})
		}

		return data
	}
)

const usersGetFailureSelector = (state) => {
	return state.users.usersGetFailure
}

export const usersGetFailureSelectorReselect = createSelector(
	usersGetFailureSelector,
	usersGetFailure => usersGetFailure
)
