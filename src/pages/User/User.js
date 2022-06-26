import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
	getAsyncUser
} from '../../redux/actions/users/user'

import {
	userGetIsFetchingSelectorReselect,
	userGetSuccessSelectorReselect,
	userGetFailureSelectorReselect
} from '../../redux/selectors/users/user'

const User = () => {

	const dispatch = useDispatch()
	const location = useLocation()

	const id = location.pathname?.split('/')[3] || location?.state?.id

	useEffect(() => {
		dispatch(getAsyncUser(id))
	}, [])

	const userGetIsFetching = useSelector(state => userGetIsFetchingSelectorReselect(state), shallowEqual)
	const userGetSuccess = useSelector(state => userGetSuccessSelectorReselect(state), shallowEqual)
	const userGetFailure = useSelector(state => userGetFailureSelectorReselect(state), shallowEqual)

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(userGetIsFetching)
	}, [userGetIsFetching])

	return (
		<>
			{
				isLoading
				? 'loading component...'
				: userGetFailure
				? 'error component'
				: <>
					<div>
						<pre>{JSON.stringify(userGetSuccess, null, 2)}</pre>
					</div>
				</>
			}
		</>
	)
}

export default memo(User)
