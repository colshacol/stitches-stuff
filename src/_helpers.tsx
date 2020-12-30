import * as React from "react"
import * as Text from "./components/Text"
import { Spacer } from "./components/Spacer"

// For demo purposes only. Gives each
// section a title and spacing from the
// previous section.
export const SectionHead = (props: any) => {
  return (
    <>
      <Spacer height={5} />
      <Text.H3>{props.children}</Text.H3>
      <Spacer height={1} />
    </>
  )
}
