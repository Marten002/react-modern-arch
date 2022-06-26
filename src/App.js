import React, { Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'

import Logo from './components/Logo/Logo'
import Users from './pages/Users/Users'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import UserAdd from './pages/UserAdd/UserAdd'

import { Routing } from './routing'

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Logo />
				{/*https://www.npmjs.com/package/react-helmet*/}
				<Routes>
					<Route exact={true} path={Routing.index} element={<Home />} />
					<Route exact={true} path={Routing.users.index} element={<Users />} />
					<Route exact={true} path={Routing.users.user.user.index} element={<User />} />
					<Route exact={true} path={Routing.users.user.add.index} element={<UserAdd />} />
					<Route exact={true} path={Routing.error['404']} element={<Home />} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
