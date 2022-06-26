import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	getAsyncUsers
} from '../../redux/actions/users/users'

import {
	usersGetIsFetchingSelectorReselect,
	usersGetSuccessSelectorReselect,
	usersGetFailureSelectorReselect
} from '../../redux/selectors/users/users'

import { Routing } from '../../routing'

const Users = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAsyncUsers())
	}, [])

	const usersGetIsFetching = useSelector(state => usersGetIsFetchingSelectorReselect(state), shallowEqual)
	const usersGetSuccess = useSelector(state => usersGetSuccessSelectorReselect(state), shallowEqual)
	const usersGetFailure = useSelector(state => usersGetFailureSelectorReselect(state), shallowEqual)

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(usersGetIsFetching)
	}, [usersGetIsFetching])

	return (
		<>
			{
				isLoading
				? 'loading component...'
				: usersGetFailure
				? 'error component'
				: <>
					<div>
						<ul>
							{
								usersGetSuccess.map(item => {
									return (
										<li key={item.id}>
											<div>ID: {item.id}</div>
											<div>Name: {item.name}</div>
											<div>E-Mail: <b>{item.email}</b></div>
											<div>
												<Link to={Routing.users.user.user.path + '/' + item.id}>
													Перейти к {item.name}
												</Link>
											</div>
										</li>
									)
								})
							}
						</ul>
					</div>
				  </>
			}
		</>
	)
}

export default memo(Users)
