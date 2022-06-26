import React from 'react'
import { Link } from 'react-router-dom'

import { Routing } from '../../routing'

const Header = () => {
	return (
		<div>
			<div>
				<Link to={Routing.users.index}>Users</Link>
			</div>
			<div>
				<Link to={Routing.users.user.add.index}>User add</Link>
			</div>
			<div>
				<Link to={Routing.users.user.add2.index}>User add 2</Link>
			</div>
		</div>
	)
}

export default Header
