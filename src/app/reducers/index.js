import {combineReducers} from 'redux'
import userReducer from './actions'
import ActiveUser from './reducer-active-user'

const allReducers = combineReducers({
  users: userReducer,
  activeUser: ActiveUser
})

export default allReducers
