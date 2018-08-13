import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border: 1px solid #0ab4b4;
  background: rgba(20, 20, 20, 0.6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;

  &:hover:enabled {
    background: rgba(20, 20, 20, 0.8);
    padding: 10px 80px;
  }

  &:disabled {
    color: #ccc;
    border: 1px solid #ccc;
  }
`
const Button = props => (
  <StyledButton type={props.type} name={props.name} disabled={props.disabled}>
    {props.value}
  </StyledButton>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string,
}

export default Button
