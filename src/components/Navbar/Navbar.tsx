import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import { useEventListener } from "../../hooks/useEventListener"
import { Button } from "../Button"
import { ChevronDown } from "react-feather"
import { throttle } from "lodash"
import { useConfig } from "../../hooks/useConfig"
import { raise } from "../../utils/raise/raise"

interface NavBarProps {
  onArrowDownClick: () => void
}

export const Navbar = ({ onArrowDownClick }: NavBarProps) => {
  const { data, status } = useConfig()

  switch (status) {
    case "pending":
      return null
    case "error":
      return raise("Error loading config")
  }

  const [opacity, setOpacity] = useState(100)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    const { bottom, height } = navRef.current?.getBoundingClientRect()!
    const opacity = bottom / height
    if (opacity > 0) {
      throttle(setOpacity, 300)(opacity)
    }
  }, [setOpacity])

  useEventListener(window, "scroll", onScroll)

  return (
    <nav
      ref={navRef}
      style={{ opacity }}
      className="nav-desktop h-[calc(100dvh-72px)] md:h-[calc(100dvh-78px)] lg:h-[100dvh] transition-opacity ease-in-out w-full p-0"
    >
      <img
        rel="preload"
        src={data.bannerImageUrl}
        className="max-w-full max-h-[100dvh]"
      />
      <div className="absolute bottom-0 pb-8 z-30">
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
    </nav>
  )
}
