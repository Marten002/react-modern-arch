import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Users from './pages/Users/Users'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import UserAdd from './pages/UserAdd/UserAdd'
import UserAdd2 from './pages/UserAdd2/UserAdd2'

import { Routing } from './routing'

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				{/*https://www.npmjs.com/package/react-helmet*/}
				<Routes>
					<Route exact={true} path={Routing.index} element={<Home />} />
					<Route exact={true} path={Routing.users.index} element={<Users />} />
					<Route exact={true} path={Routing.users.user.user.index} element={<User />} />
					<Route exact={true} path={Routing.users.user.add.index} element={<UserAdd />} />
					<Route exact={true} path={Routing.users.user.add2.index} element={<UserAdd2 />} />
					<Route exact={true} path={Routing.error['404']} element={<div>404</div>} />
				</Routes>
			</Suspense>
		</>
	)
}

export default App
