import React, { memo, useEffect } from 'react'
import { useMutation } from 'react-query'

import { apiPostUser } from '../../api/users/user'

const UserAdd3 = () => {

	const { isLoading, data, error, mutate, reset } = useMutation(async data => await apiPostUser({data}))

	useEffect(() => {

		return () => {
			reset()
		}
	}, [])

	const handlePostData = () => {
		mutate({name: 'test_name_3'})
	}

	return (
		<>
			{
				isLoading
				? 'loading component...'
				: error
				? 'error component (error.message)'
				: data
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

export default memo(UserAdd3)
