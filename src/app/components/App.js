import React from 'react'
import {connect} from 'react-redux'
import UserList from '../containers/user-list'
import Details from '../containers/active-user'
import { getTasks, completeTask } from '../reducers/actions'

require('../../styles.scss')

const App = () => (

  <div>
    <h2>Usernames: </h2>
      <UserList></UserList>
    <hr/>
    <h2>User Details:</h2>
      <Details />
  </div>

)

export default App
