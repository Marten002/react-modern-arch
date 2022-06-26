import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
	postAsyncUser,
	setUserInitial
} from '../../redux/actions/users/user'

import {
	userPostIsFetchingSelectorReselect,
	userPostSuccessSelectorReselect,
	userPostFailureSelectorReselect
} from '../../redux/selectors/users/user'

const UserAdd = () => {

	const dispatch = useDispatch()

	useEffect(() => {

		return () => {
			// когда выходим со страницы, очищаем редакс
			dispatch(setUserInitial())
		}
	}, [])

	const userPostIsFetching = useSelector(state => userPostIsFetchingSelectorReselect(state), shallowEqual)
	const userPostSuccess = useSelector(state => userPostSuccessSelectorReselect(state), shallowEqual)
	const userPostFailure = useSelector(state => userPostFailureSelectorReselect(state), shallowEqual)

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const handlePostData = () => {
		dispatch(postAsyncUser({name: 'test_data'}))
	}

	useEffect(() => {
		setIsLoading(userPostIsFetching)
	}, [userPostIsFetching])

	useEffect(() => {
		if (userPostFailure) {
			setError(userPostFailure)
		}
	}, [userPostFailure])

	useEffect(() => {
		if (userPostSuccess) {
			setSuccess(userPostSuccess)
		}
	}, [userPostSuccess])

	return (
		<>
			{
				isLoading
				? 'loading component...'
				: error
				? 'error component'
				: success
				? 'success component'
				: <>
					<button onClick={handlePostData}>
						Отправить
					</button>
				</>
			}
		</>
	)
}

export default memo(UserAdd)
