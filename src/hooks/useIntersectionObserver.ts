import { useEffect } from "react"

export interface UseIntersectionObserverProps {
  callback: IntersectionObserverCallback
  observables: Array<Element>
  config?: IntersectionObserverInit
  deps?: Array<unknown>
}

export const useIntersectionObserver = ({
  callback,
  config,
  observables,
  ...deps
}: UseIntersectionObserverProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, config)

    observables.forEach((observable) => {
      observer.observe(observable)
    })

    return () => {
      observer.disconnect()
    }
  }, [deps, callback, config, observables])
}
