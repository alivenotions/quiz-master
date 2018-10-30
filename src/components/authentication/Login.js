import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginCard from './LoginCard'

class Login extends React.Component {
  state = {
    redirectToQuizManager: false,
  }

  submitForm = event => {
    event.preventDefault()
    const [username] = event.target
    sessionStorage.setItem('username', username.value)
    this.setState({ redirectToQuizManager: true })
  }
  render() {
    const { redirectToQuizManager } = this.state
    return !!redirectToQuizManager ? (
      <Redirect to={'/instructions'} />
    ) : (
      <LoginCard submitForm={this.submitForm} />
    )
  }
}

export default Login
