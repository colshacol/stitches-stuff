import * as React from "react"
import { StyledProps, styled, css } from "../styles/stitches"
import * as Text from "./Text"

type PropsT = StyledProps & {
  children?: string
  headline?: string
  kind?: string
}

export const StyledWrapper = styled("div", {
  background: "var(--color-grayscale-200)",
  borderLeftWidth: "0.6rem",
  borderLeftStyle: "solid",
  borderColor: "var(--color-grey)",
  padding: "$2",
  display: "flex",
  flexDirection: "column",

  // NOTE: ** This needs to be a standardized
  // styled element.
  [`${Text.H3}:first-of-type`]: {
    marginBottom: "$2",
    fontSize: "2rem",
    color: "var(--color-dark-blue)",
    fontWeight: 700
  },

  variants: {
    kind: {
      success: {
        borderColor: "var(--color-green)"
      },
      danger: {
        borderColor: "var(--color-red-vivid)"
      },
      warning: {
        borderColor: "var(--color-yellow)"
      }
    }
  }
})

export const InfoBox: React.FC<PropsT> = (props) => {
  return (
    <StyledWrapper {...props}>
      {props.headline && <Text.H3>{props.headline}</Text.H3>}
      {props.children && <Text.Paragraph>{props.children}</Text.Paragraph>}
    </StyledWrapper>
  )
}
