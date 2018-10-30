import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './authentication/Login'
import '../theme/globalStyle'
import Instructions from './instructions/Instructions'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/instructions" component={Instructions} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
