import * as React from "react"

import { useMousePosition } from "../utilities/useMousePosition"
import { MousePositionT } from "../utilities/useMousePosition"

const DEFAULT_RECT_CLIENT = { x: 0, y: 0, height: 0, width: 0 }

const useBoundingRectClient = (parent) => {
  const rectClient = parent?.getBoundingClientRect() || {}
  return { ...DEFAULT_RECT_CLIENT, ...rectClient }
}

type PropsT = {
  parentRef: React.RefObject<HTMLElement>
}

export const MouseSafeArea: React.FC<PropsT> = (props) => {
  const rectClient: RectClientT = useBoundingRectClient(props.parentRef)
  const mousePosition: MousePositionT = useMousePosition()
  const style = useZoneStyle(rectClient, mousePosition)

  return <div style={style} />
}

type RectClientT = {
  x: number
  y: number
  h: number
  w: number
}

const useZoneStyle = (rectClient, mousePosition: MousePositionT) => {
  const isMouseXGreater = mousePosition.x > rectClient.x
  const mathValue0 = rectClient.x - mousePosition.x
  const mathValue1 = mousePosition.x - (rectClient.x + rectClient.width)

  const leftValue = -Math.max(mathValue0, 10) + "px"
  const rightValue = -Math.max(mathValue1, 10) + "px"

  const widthValue0 = -Math.max(mathValue1, 10) + "px"
  const widthValue1 = Math.max(mathValue0, 10) + "px"

  const clipComputedValue =
    (100 * (mousePosition.y - rectClient.y)) / rectClient.height
  const clipPathValue0 = `polygon(0% 0%, 0% 100%, 100% ${clipComputedValue}%)`
  const clipPathValue1 = `polygon(100% 0%, 0% ${clipComputedValue}%, 100% 100%)`

  const width = isMouseXGreater ? widthValue0 : widthValue1

  const left = isMouseXGreater ? undefined : leftValue

  const right = isMouseXGreater ? rightValue : undefined

  const clipPath =
    mousePosition.x > rectClient.x ? clipPathValue0 : clipPathValue1

  return {
    height: rectClient.height,
    position: "absolute",
    top: 0,
    left,
    right,
    width,
    clipPath
  } as React.CSSProperties
}
