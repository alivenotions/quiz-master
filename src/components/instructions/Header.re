module Styles = {
  open Css

  let header = style([
    color(hex("#eee")),
    textAlign(`center),
  ])
}

[@bs.deriving abstract]
type jsProps = {
  heading: string,
}

let component = ReasonReact.statelessComponent("Header")

let make = (~heading) => {
  ...component,
  render: (_self) => <h1 className=Styles.header>{ heading |> ReasonReact.string }</h1>
}

let header = ReasonReact.wrapReasonForJs(
  ~component, jsProps => make(
    ~heading=jsProps->headingGet,
  )
)
