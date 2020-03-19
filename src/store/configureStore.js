import {createStore, applyMiddleware, compose} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {rootEpic, rootReducer} from './modules/root'

import logger from 'redux-logger'

const epicMiddleware = createEpicMiddleware()

export default function configureStore(){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(epicMiddleware, logger)
        )
    )

    epicMiddleware.run(rootEpic)

    return store
}