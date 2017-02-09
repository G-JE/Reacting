import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store, { history } from './store'
import App from './components/App'
import Body from './components/Body'
import Gallery from './components/Gallery'
import Post from './components/Post'
import Home from './components/Home'
require('./styles.scss')


const node = document.getElementById('root')

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/About" component={Post} />
        <Route path="/Portfolio" component={Gallery} />
        <Route path="/Contact" component={Post} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  node
);
