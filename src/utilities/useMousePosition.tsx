import * as React from "react"
import throttle from "just-throttle"

export type MousePositionT = { x: number; y: number }

const INITIAL_POSITION = { x: 0, y: 0 }

export const useMousePosition = (): MousePositionT => {
  const [position, setPosition] = React.useState<MousePositionT>(
    INITIAL_POSITION
  )

  const updatePosition = throttle((event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }, 200)

  React.useEffect(() => {
    window.addEventListener("mousemove", updatePosition)
    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return position
}
