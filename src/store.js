import {createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import about from './data/about'
import images from './data/images'

//import root reducer
import rootReducer from './reducers/index'

let initialState = { about, images }

let store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store)

export default store
