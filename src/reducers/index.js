import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sizing from '../reducers/SVG_Sizing'
import Library from '../reducers/Library'

const rootReducer = combineReducers({sizing, Library, routing: routerReducer})

export default rootReducer
