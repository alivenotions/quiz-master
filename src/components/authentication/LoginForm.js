import React from 'react'

import './LoginForm.css'

const FormErrors = ({ formErrors }) => (
  <div className="form-errors">
    {Object.keys(formErrors).map((fieldName, index) => {
      return !!formErrors[fieldName].length > 0 ? (
        <p style={{ color: '#FF3333' }} key={index}>
          {fieldName} {formErrors[fieldName]}
        </p>
      ) : (
        ''
      )
    })}
  </div>
)

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    formErrors: { username: '', password: '' },
    usernameValid: false,
    passwordValid: false,
    formValid: false,
  }

  validateField = (fieldName, value) => {
    let { formErrors, usernameValid, passwordValid } = this.state

    switch (fieldName) {
      case 'username':
        usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        formErrors.username = !!usernameValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid = value.length > 0
        formErrors.password = !!passwordValid ? '' : ` can't be empty`
        break
      default:
        break
    }

    this.setState(
      {
        formErrors,
        usernameValid,
        passwordValid,
      },
      this.validateForm
    )
  }

  validateForm = _ => {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid,
    })
  }

  handleInputChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
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
          <label htmlFor="username" />
          <input
            type="text"
            className="inputFields"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password" />
          <input
            type="password"
            className="inputFields"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            type="submit"
            id="login-btn"
            name="login"
            alt="Login"
            value="Login"
            disabled={!this.state.formValid}
          />
          <FormErrors formErrors={this.state.formErrors} />
        </form>
      </div>
    )
  }
}

export default LoginForm
