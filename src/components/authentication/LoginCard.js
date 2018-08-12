import React from 'react'

import LoginForm from './LoginForm'
import './LoginCard.css'

class LoginCard extends React.Component {
  render() {
    return (
      <div className="login-card">
        <div className="info">
          <h2>Quiz Master</h2>
          <p>four legs good, two legs better</p>
        </div>
        <LoginForm submitForm={this.props.submitForm} />
      </div>
    )
  }
}

export default LoginCard
