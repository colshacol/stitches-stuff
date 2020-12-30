import * as React from "react"
import { styled, css } from "../styles/stitches"

// ** NOTE: This kind of component is not the
// target market for styled systems like Stitches.
// It can be done using a shit ton of compoundVariants,
// and it is even a more elegant solution than what
// is seen in this file, but, again, not Stitches'
// domain.

type BoxPropsT = {
  direction?: string
  isReverse?: boolean
  isInline?: boolean
  arrangeX?: string
  arrangeY?: string
  isFullWidth?: boolean
  className?: string
  children?: any
}

// NOTE: justify-content and align-items accept
// similar but varied values.

const ALIGN_ITEMS_VALUE_MAP = new Map([
  ["center", "center"],
  ["start", "flex-start"],
  ["end", "flex-end"],
  ["between", "space-between"],
  ["around", "space-around"],
  ["evenly", "space-evenly"]
])

const JUSTIFY_CONTENT_VALUE_MAP = new Map([
  ["center", "center"],
  ["start", "flex-start"],
  ["end", "flex-end"],
  ["between", "space-between"],
  ["around", "space-around"],
  ["evenly", "space-evenly"]
])

// ** NOTE: Referential transparency / destructuring.
// ** NOTE: Arrow parens. (Why not? Don't be lazy.)

const getBoxStyle = (props: BoxPropsT) => {
  const isRow = props.direction === "row"
  const reverseText = props.isReverse ? "-reverse" : ""

  const [xArrangementPropName, yArrangementPropName] = isRow
    ? ["justifyContent", "alignItems"]
    : ["alignItems", "justifyContent"]

  const [xArrangementValueMap, yArrangementValueMap] = isRow
    ? [JUSTIFY_CONTENT_VALUE_MAP, ALIGN_ITEMS_VALUE_MAP]
    : [ALIGN_ITEMS_VALUE_MAP, JUSTIFY_CONTENT_VALUE_MAP]

  const xArrangementValue = xArrangementValueMap.get(props.arrangeX || "")
  const yArrangementValue = yArrangementValueMap.get(props.arrangeY || "")
  // ** NOTE: Just doing a style object for brevity.

  const style = {
    width: props.isFullWidth && "100%",
    display: props.isInline ? "inline-flex" : "flex",
    flexDirection: `${props.direction}${reverseText}`,
    [xArrangementPropName]: xArrangementValue,
    [yArrangementPropName]: yArrangementValue
  }

  return style
}

export const Box: React.FC<BoxPropsT> = (props: BoxPropsT) => {
  const style = getBoxStyle(props) as React.CSSProperties
  return <div style={style} {...props} />
}

Box.defaultProps = {
  direction: "row",
  isReverse: false,
  isInline: false,
  arrangeX: "start",
  arrangeY: "start",
  isFullWidth: false,
  children: null,
  className: ""
}
