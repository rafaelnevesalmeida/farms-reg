import React from 'react'
import { Route } from 'react-router'

import Home from './components/Home'
import Login from './components/Login'
import ChangeName from './components/ChangeName'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/changeName' exact component={ChangeName} />
      </React.Fragment>
    )
  }
}

export default App
