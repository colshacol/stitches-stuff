import * as React from "react"

// **NOTE: Not a Stitches component.

type PropsT = {
  width?: number
  height?: number
  size?: number
}

export const Spacer: React.FC<PropsT> = (props) => {
  const minWidth = `${props.size || props.width}rem`
  const minHeight = `${props.size || props.height}rem`
  const style = { minWidth, minHeight }

  return <div style={style} />
}

Spacer.defaultProps = {
  width: 1,
  height: 1
}
