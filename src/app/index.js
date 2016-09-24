import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import AllReducers from './reducers'
import App from './components/App'

const store = createStore(AllReducers)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
    document.getElementById('root')
);
