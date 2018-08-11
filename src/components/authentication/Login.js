import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'

class Login extends React.Component {
  state = {
    redirectToQuizManager: false,
  }

  submitForm = event => {
    event.preventDefault()
    const [username] = event.target
    sessionStorage.setItem('username', username)
    this.setState({ redirectToQuizManager: true })
  }
  render() {
    const { redirectToQuizManager } = this.state
    return !!redirectToQuizManager ? (
      <Redirect to={'/QuizManager'} />
    ) : (
      <LoginForm submitForm={this.submitForm} />
    )
  }
}

export default Login
