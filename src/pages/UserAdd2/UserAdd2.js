import React, { memo, useEffect } from 'react'
import { useRequest } from 'ahooks'

import { apiPostUser } from '../../api/users/user'

const UserAdd2 = () => {

	const { data, error, loading, run, cancel } = useRequest(apiPostUser, {manual: true})

	useEffect(() => {

		return () => {
			cancel()
		}
	}, [])

	const handlePostData = () => {
		run({data: {name: 'test_name'}})
	}

	return (
		<>
			{
				loading
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

export default memo(UserAdd2)
