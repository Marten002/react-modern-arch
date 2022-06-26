import { createSelector } from 'reselect'

// GET

const userGetIsFetchingSelector = (state) => {
	return state.user.userGetIsFetching
}

export const userGetIsFetchingSelectorReselect = createSelector(
	userGetIsFetchingSelector,
	userGetIsFetching => userGetIsFetching
)

const userGetSuccessSelector = (state) => {
	return state.user.userGetSuccess
}

export const userGetSuccessSelectorReselect = createSelector(
	userGetSuccessSelector,
	userGetSuccess => {
		let data = {}

		if (userGetSuccess) {
			data = userGetSuccess[0]
		}

		return data
	}
)

const userGetFailureSelector = (state) => {
	return state.user.userGetFailure
}

export const userGetFailureSelectorReselect = createSelector(
	userGetFailureSelector,
	userGetFailure => userGetFailure
)

// POST

const userPostIsFetchingSelector = (state) => {
	return state.user.userPostIsFetching
}

export const userPostIsFetchingSelectorReselect = createSelector(
	userPostIsFetchingSelector,
	userPostIsFetching => userPostIsFetching
)

const userPostSuccessSelector = (state) => {
	return state.user.userPostSuccess
}

export const userPostSuccessSelectorReselect = createSelector(
	userPostSuccessSelector,
	userPostSuccess => userPostSuccess
)

const userPostFailureSelector = (state) => {
	return state.user.userPostFailure
}

export const userPostFailureSelectorReselect = createSelector(
	userPostFailureSelector,
	userPostFailure => userPostFailure
)
