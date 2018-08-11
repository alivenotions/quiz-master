import React from 'react'

import './LoginForm.css'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="login-card">
        <div className="info">
          <h2>Quiz Master</h2>
          <p>four legs good, two legs better</p>
        </div>
        <form className="login-form" onSubmit={this.props.submitForm}>
          <h2>Login</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="username" />
              <input
                type="text"
                className="inputFields"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInputChange}
                required
              />
            </li>
            <li>
              <label htmlFor="password" />
              <input
                type="password"
                className="inputFields"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required
              />
            </li>
            <li id="center-btn">
              <input
                type="submit"
                id="login-btn"
                name="login"
                alt="Login"
                value="Login"
              />
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default LoginForm
