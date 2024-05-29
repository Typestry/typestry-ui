"use client"

import { useLayoutEffect } from "react"

export const useEventListener = (
  ref: Element | Document | Window | null | undefined,
  type: string,
  callback: EventListenerOrEventListenerObject,
  options?: AddEventListenerOptions,
) => {
  useLayoutEffect(() => {
    ref?.addEventListener(type, callback, options)
    return () => ref?.removeEventListener(type, callback, options)
  }, [ref, type, callback, options])
}
