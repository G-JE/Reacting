import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sizing from '../reducers/SVG_Sizing'
import Library from '../reducers/Library'
import images from '../reducers/images'

const rootReducer = combineReducers({sizing, Library, images, routing: routerReducer})

export default rootReducer
