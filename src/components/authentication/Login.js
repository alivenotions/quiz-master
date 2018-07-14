import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm'
import './Login.css'

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
      <div className="login">
        <LoginForm submitForm={this.submitForm} />
      </div>
    )
  }
}

export default Login
