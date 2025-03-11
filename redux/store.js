import { createStore, applyMiddleware } from 'redux'
import { postReducer } from './postReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const postStore = createStore(postReducer, composeWithDevTools(
    applyMiddleware()))