import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './authentication/Login'
import '../theme/globalStyle'
import QuizMaster from './quiz-master/QuizMaster'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/quiz-master" component={QuizMaster} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
