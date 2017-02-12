import {createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import Library from './data/Library'

//import root reducer
import rootReducer from './reducers/index'

let initialState = { Library  }

let store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store)

export default store
