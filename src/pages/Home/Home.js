import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { Routing } from '../../routing'

const Home = () => {
	return (
		<div>
			<div>
				<Link to={Routing.users.index}>Users</Link>
			</div>
			<div>
				<Link to={Routing.users.user.add.index}>User add</Link>
			</div>
		</div>
	)
}

export default memo(Home)
