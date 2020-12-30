import { ButtonPropsT } from "../Button"
import { H1PropsT, H2PropsT, ParagraphPropsT } from "../Text"
import { IStyledComponent } from "@stitches/react"

export const Button: React.FC = (props: ButtonPropsT) => null
export const H1: React.FC<H1PropsT> = (props) => null
export const H2: React.FC<H2PropsT> = (props) => null
export const Paragraph: React.FC<ParagraphPropsT> = (props) => null

console.log({ Button })

export const TypedComponents = {
  Button: Button as React.FC<ButtonPropsT>,
  Text: {
    Paragraph,
    H1,
    H2
  }
}
