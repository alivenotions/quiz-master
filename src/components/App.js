import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './authentication/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
