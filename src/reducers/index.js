import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import sizing from '../reducers/SVG_Sizing'
import about from '../reducers/about'
import images from '../reducers/images'

const rootReducer = combineReducers({sizing, about, images, routing: routerReducer})

export default rootReducer
