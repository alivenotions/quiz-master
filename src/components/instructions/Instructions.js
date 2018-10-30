import React, { Component, Fragment } from 'react'

import { header as Header } from './Header.re'
import { instructionBox as InstructionsBox } from './InstructionBox.bs'

const instructionSet = [
  '1. Please read the instructions before starting the test.',
  '2. This will be a timed test, with the timer visible on the upper right corner.',
  '3. There will be 15 questions in every section, which will be listed on the left sidebar.',
  '4. You can attempt a question and navigate away without losing your answer.',
  '5. You can submit the test manually by clicking the submit button on the header.',
  '6. The test will be submitted automatically as soon as the timer is done.',
  '7. All the best!',
]

export default class Instructions extends Component {
  render() {
    return (
      <Fragment>
        <Header heading="QUIZ MASTER" />
        <InstructionsBox instructions={instructionSet} />
      </Fragment>
    )
  }
}
