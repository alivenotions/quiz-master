import React, { Component, Fragment } from 'react'

import { header as Header } from './Header.re'

export default class QuizMaster extends Component {
  render() {
    return (
      <Fragment>
        <Header heading="Quiz Master" />
      </Fragment>
    )
  }
}
