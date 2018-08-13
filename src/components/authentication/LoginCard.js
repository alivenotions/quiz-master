import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import LoginForm from './LoginForm'

const StyledLoginCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, 0.5);
`
const SideTextInfo = styled.div`
  width: 45%;
  background: rgba(20, 20, 20, 0.8);
  padding: 30px 0;
  border-right: 5px solid rgba(30, 30, 30, 0.8);
`
const Paragraph = styled.p`
  font-size: 18px;
`

const H2 = styled.h2`
  padding-top: 30px;
  font-weight: 300;
`

class LoginCard extends React.Component {
  render() {
    return (
      <StyledLoginCard>
        <SideTextInfo>
          <H2>Quiz Master</H2>
          <Paragraph>four legs good, two legs better</Paragraph>
        </SideTextInfo>
        <LoginForm submitForm={this.props.submitForm} />
      </StyledLoginCard>
    )
  }
}

LoginCard.propTypes = {
  submitForm: PropTypes.func.isRequired,
}

export default LoginCard
