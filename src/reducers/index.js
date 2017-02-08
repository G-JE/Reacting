import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sizing from '../reducers/SVG_Sizing'
import about from '../reducers/about'

const rootReducer = combineReducers({sizing, about, routing: routerReducer})

export default rootReducer
