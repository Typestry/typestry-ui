import { useEffect } from "react"

export const useInterSectionObserver = (
  callback: IntersectionObserverCallback,
  observables: Array<Element>,
  config?: IntersectionObserverInit,
  deps: Array<any> = [],
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, config)

    observables.forEach((observable) => {
      observer.observe(observable)
    })

    return () => {
      observer.disconnect()
    }
  }, deps)
}
