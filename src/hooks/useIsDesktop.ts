import { useCallback, useEffect, useState } from "react"
import useEventListener from "@typestry/ui/hooks/useEventListener"

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth > 768)
  }, [setIsDesktop])

  useEffect(() => {
    handleResize()
  }, [handleResize])

  useEventListener(window, "resize", handleResize)

  return isDesktop
}

export default useIsDesktop
