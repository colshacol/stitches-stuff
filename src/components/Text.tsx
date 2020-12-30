import * as React from "react"
import { styled, css } from "../styles/stitches"

export type ParagraphPropsT = { yolo?: boolean }
export type H1PropsT = { yolo?: boolean }
export type H2PropsT = { yolo?: boolean }

export const Paragraph = styled("p", {
  color: "var(--color-black)",
  fontSize: "1.6rem",
  letterSpacing: 0.5
})

export const H1 = styled("h1", {
  color: "var(--color-black)",
  fontSize: "$6"
})

export const H2 = styled("h2", {
  color: "var(--color-black)",
  fontSize: "$5"
})

export const H3 = styled("h3", {
  color: "var(--color-black)",
  fontSize: "$4"
})

export const H4 = styled("h4", {
  color: "var(--color-black)",
  fontSize: "$3"
})

export const H5 = styled("h5", {
  color: "var(--color-black)",
  fontSize: "$2"
})

export default {
  Paragraph,
  H1,
  H2,
  H3,
  H4,
  H5
}
