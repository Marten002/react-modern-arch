import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from '../saga/index'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = compose

const store = createStore(
    reducers,
    composeEnhancer(
        applyMiddleware(
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(sagas)

export default store
