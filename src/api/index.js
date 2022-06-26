import axios from 'axios'

import { getToken } from '../utils/token/getToken'

const REACT_APP_SERVER = process.env.REACT_APP_SERVER
const BASE_URL = REACT_APP_SERVER ? REACT_APP_SERVER : 'http://localhost:3000/'

const client = axios.create({
    BASE_URL,
    withCredentials: true,
})

client.interceptors.request.use(config => {
    const token = getToken()

	if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

	if (config?.dataType === 'xml') {
		config.headers['Content-Type'] = 'application/xml'
	} else {
		config.headers.Accept = 'application/json'
		config.headers['Content-Type'] = 'application/json;charset=utf-8'
	}

    return config
})

client.interceptors.response.use(response => response, error => {
	if (error.response.data.statusCode === 401) {
		// Логика, если запрос не авторизованный
	}

    return Promise.reject(error)
})

export default client
