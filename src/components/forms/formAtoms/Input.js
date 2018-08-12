import React from 'react'

import './Input.css'
const Input = props => (
  <React.Fragment>
    <label htmlFor={props.name} />
    <input
      type={props.type}
      className="inputFields"
      name={props.name}
      placeholder={props.name[0].toUpperCase() + props.name.slice(1)}
      value={props.value}
      onChange={props.onChange}
    />
  </React.Fragment>
)

export default Input
