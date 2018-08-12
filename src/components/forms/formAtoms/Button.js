import React from 'react'

import './Button.css'

const Button = props => (
  <button
    type={props.type}
    id="submit-btn"
    name={props.name}
    disabled={props.disabled}
  >
    {props.value}
  </button>
)

export default Button
