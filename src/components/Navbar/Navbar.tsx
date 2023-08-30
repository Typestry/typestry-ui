import { useBandPageContext } from "../../providers/BandPageProvider"
import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import { useEventListener } from "../../hooks/useEventListener"
import { Button } from "../Button"
import { ChevronDown } from "react-feather"

interface NavBarProps {
  onArrowDownClick: () => void
}

export const Navbar = ({ onArrowDownClick }: NavBarProps) => {
  const {
    bandPageConfig: { bandName },
  } = useBandPageContext()
  const [opacity, setOpacity] = useState(100)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    const { bottom, height } = navRef.current?.getBoundingClientRect()!
    const opacity = bottom / height
    if (opacity > 0) {
      setOpacity(bottom / height)
    }
  }, [setOpacity])

  useEventListener(window, "scroll", onScroll)

  return (
    <nav
      ref={navRef}
      style={{ opacity }}
      className="nav-desktop h-[calc(100vh-72px)] md:h-[calc(100vh-78px)] lg:h-[100vh]"
    >
      <div className="flex flex-col h-full items-center">
        <div className="flex flex-col h-full gap-y-4 lg:gap-y-8 py-4 overflow-hidden">
          <h1 className="m-auto">{bandName}</h1>
        </div>
        <div className="sticky bottom-0 pb-8">
          <Button
            className={classNames(
              { "opacity-0": window.scrollY > 0 },
              "border-none hover:bg-transparent flex transition-opacity duration-300 will-change-scroll",
            )}
            onClick={onArrowDownClick}
          >
            <ChevronDown
              size={100}
              strokeWidth={1}
              viewBox="0 -12 24 48"
              preserveAspectRatio="none"
            />
          </Button>
        </div>
      </div>
    </nav>
  )
}
