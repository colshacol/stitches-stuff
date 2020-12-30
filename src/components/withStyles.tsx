import * as React from "react"

import { Button as ReaButton } from "reakit/Button"
import { styled, css } from "../styles/stitches"
import { IStyledComponent, TComponentStylesObject, TStyled, TCssProp } from "@stitches/react"

type RFC<PT> = React.FunctionComponent<PT>
type WrapperReturnT<PT, CT> = IStyledComponent<RFC<PT>, any, CT>
type StyledReturnT = ReturnType<typeof styled>

let x: StyledReturnT | undefined

interface ArgT<PT, CT> {
  configuration: TCssProp<CT>
  component: RFC<PT>
}

type Xt = {
  as: string
}

const withStitches = <PT, CT>(arg: ArgT<PT, CT>): WrapperReturnT<PT, CT> => {
  type ComponentPropsT = React.ComponentProps<typeof arg.component>
  const StyledComponent = styled(arg.component, arg.configuration)

  const WrapperComponent: typeof StyledComponent & Xt = (
    props: React.ComponentProps<typeof StyledComponent>
  ) => {
    return null
  }

  WrapperComponent.compoundVariant = StyledComponent.compoundVariant

  return WrapperComponent
}

type PropsT = {
  iconName?: string
}

const Button = (props: PropsT) => {
  return <ReaButton as="button" {...props} />
}

export default withStitches({
  component: Button,
  configuration: {}
})
