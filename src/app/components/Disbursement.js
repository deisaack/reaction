import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"

const reducer = (state={}, action) => {

    return state
}

const middleware = applyMiddleware(logger())
const store = createStore(reducer, middleware)

store.dispatch({type: "FOO"})
