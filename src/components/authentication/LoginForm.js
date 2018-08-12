import React from 'react'

import FormErrors from '../forms/FormErrors'
import Input from '../forms/formAtoms/Input'
import Button from '../forms/formAtoms/Button'
import './LoginForm.css'

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
      <form className="login-form" onSubmit={this.props.submitForm}>
        <h2>Login</h2>
        <Input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <Button
          type="submit"
          id="login-btn"
          name="login"
          disabled={!this.state.formValid}
          value="Submit"
        />
        <FormErrors formErrors={this.state.formErrors} />
      </form>
    )
  }
}

export default LoginForm
