module Styles = {
  open Css

  let instructionBox = style([
    marginTop(px(0)),
    marginBottom(px(0)),
    marginLeft(`auto),
    marginRight(`auto),
    padding(em(4.0)),
  ])

  let instructionSet = style([
    listStyleType(`none),
    marginTop(px(0)),
    marginBottom(px(0)),
    marginRight(`percent(25.0)),
    marginLeft(`percent(25.0)),
    fontSize(em(1.5)),
  ])

  let proceedForm = style([
    textAlign(`center),
    marginTop(px(20))
  ])
}

[@bs.deriving abstract]
type jsProps = {
  instructions: array(string),
}

let component = ReasonReact.statelessComponent("InstructionBox")

let make = (~instructions) => {
  ...component,
  render: _self => (
    <div className=Styles.instructionBox>
      <ul className=Styles.instructionSet>
        (instructions 
          |> Array.map(i => <li>(ReasonReact.string(i))</li>)
          |> ReasonReact.array
        )
      </ul>
      <div className=Styles.proceedForm>
        <Button type_="submit" name="proceed" disabled=false value="Proceed" />
      </div>
    </div>
  )
}

let instructionBox = ReasonReact.wrapReasonForJs(
  ~component, jsProps => make(
    ~instructions=jsProps->instructionsGet,
  )
)
