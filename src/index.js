import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store, { history } from './store'
import App from './components/App'
import Body from './components/Body'
import Portfolio from './components/Portfolio'
import Post from './components/Post'
import Home from './components/Home'
import Zoomed from './components/Zoomed'
import About from './components/About'
import Contact from './components/Contact'
require('./styles.scss')


const node = document.getElementById('root')

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/About" component={About} />
        <Route title="Porfolio" path="/Portfolio">
          <IndexRoute component={Portfolio}/>
          <Route path="/Portfolio/(:postid)" component={Zoomed} />
        </Route>
        <Route path="/Contact" component={Contact} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  node
);
