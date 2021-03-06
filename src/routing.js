export const Routing = {
    index: '/',
	users: {
		index: '/users',
		user: {
			user: {
				index: '/users/user/:id',
				path: '/users/user'
			},
			add: {
				index: '/users/user/add'
			},
			add2: {
				index: '/users/user/add2'
			},
			add3: {
				index: '/users/user/add3'
			}
		}
	},
	error: {
		404: '*'
	}
}
