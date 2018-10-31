[@bs.module "../forms/formAtoms/Button"] external button: ReasonReact.reactClass = "default"

[@bs.deriving abstract]
type jsProps = {
  [@bs.as "type"] type_: string,
  name: string,
  disabled: bool,
  value: string,
}

let make = (~type_, ~name, ~disabled, ~value) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=button,
    ~props=jsProps(~type_, ~name, ~disabled, ~value)
  )
