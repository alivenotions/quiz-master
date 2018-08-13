import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  display: block;
  margin: 15px auto;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid #0ab4b4;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
`

const Input = props => (
  <React.Fragment>
    <label htmlFor={props.name} />
    <StyledInput
      type={props.type}
      className="inputFields"
      name={props.name}
      placeholder={props.name[0].toUpperCase() + props.name.slice(1)}
      value={props.value}
      onChange={props.onChange}
    />
  </React.Fragment>
)

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Input
