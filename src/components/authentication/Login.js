import React from 'react'

import LoginForm from './LoginForm'
import './Login.css'

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LoginForm />
      </div>
    )
  }
}

export default Login
