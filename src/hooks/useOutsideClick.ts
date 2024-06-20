import { RefObject, useEffect } from "react"

/**
 * useOutsideClick
 * @param ref - Reference of the element
 * @param handler - Callback function to be executed when the event occurs
 */

export type Event = MouseEvent | TouchEvent

function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      if (!el || el.contains(event?.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchend", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchend", listener)
    }
  }, [ref, handler])
}

export default useOutsideClick
