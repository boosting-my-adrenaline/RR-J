import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './root.reducer'
import rootSaga from './root.sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default store
