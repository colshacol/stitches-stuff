import * as React from "react"
import { Radio as RRadio } from "reakit/Radio"
import { styled, css } from "../styles/stitches"

type PropsT = {
  isDisabled: boolean
  isChecked: boolean
  isFocusable: boolean
  id: string
  value: string
  label: string
  state: any
}

const RadioLabel = styled("label", {
  cursor: "pointer"
})

const RadioInput = styled(RRadio, {
  all: "unset",
  transform: "scale(1)",
  width: "2rem",
  height: "2rem",
  cursor: "pointer",
  visibility: "hidden",

  "&:after": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    content: '""',
    width: "1.8rem",
    height: "1.8rem",
    visibility: "visible",
    backgroundColor: "#ffffff",
    border: "0.2rem solid var(--color-border-grey)",
    borderRadius: "50%"
  },

  "&:disabled:after": {
    border: "0.2rem solid #ececec"
  },

  "&:checked:after": {
    fontFamily: "BHG, Sans-Serif",
    content: '"\\e91c"',
    backgroundColor: "var(--color-white)",
    color: "var(--color-dark-blue)",
    fontSize: "1.4rem"
  },

  "&:hover:after": {
    backgroundColor: "var(--color-border-grey)",
    cursor: "pointer"
  },

  "&:disabled:hover:after": {
    backgroundColor: "#ffffff",
    cursor: "not-allowed"
  }
})

export const Radio: React.FC<PropsT> = (props) => {
  return (
    <RadioLabel>
      <RadioInput
        id={props.id}
        value={props.value}
        checked={props.isChecked}
        disabled={props.isDisabled}
        focusable={props.isFocusable}
        {...props.state}
      />
    </RadioLabel>
  )
}
