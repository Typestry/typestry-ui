"use client"

import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import useEventListener from "@/hooks/useEventListener"
import Button from "@/components/Button"
import { ChevronDown } from "react-feather"
import _throttle from "lodash/throttle"
import isClient from "@/utils/isClient"
import Config from "@/types/Config"

const maybeWindow = isClient() ? window : null

interface NavbarProps extends Pick<Config, "bannerImageUrl" | "bandName"> {
  slotProps?: {
    root?: React.ComponentProps<"nav">
  }
}

const Navbar = ({ bannerImageUrl, bandName, slotProps }: NavbarProps) => {
  const [opacity, setOpacity] = useState(100)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    if (!navRef.current) return

    const { bottom, height } = navRef.current.getBoundingClientRect()
    const opacity = bottom / height

    const throttleFn = _throttle(setOpacity, 300)

    if (opacity > 0) {
      throttleFn(opacity)
    }

    return () => {
      throttleFn.cancel()
    }
  }, [setOpacity])

  useEventListener(maybeWindow, "scroll", onScroll)

  const onArrowDownClick = () => {
    const home = document.getElementById("home")!
    home.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      {...slotProps?.root}
      ref={navRef}
      style={{
        opacity,
        backgroundImage: `url("${bannerImageUrl}")`,
        transition: "opacity 0.1 ease-in-out",
      }}
      className={classNames(
        "nav-desktop h-[calc(100dvh-72px)] md:h-[calc(100dvh-78px)] lg:h-[100dvh] w-full p-0",
        slotProps?.root?.className,
      )}
    >
      <div className="flex flex-col h-full gap-y-4 lg:gap-y-8 py-4 overflow-hidden">
        <h1 className="m-auto font-light">{bandName}</h1>
      </div>
      <div className="sticky bottom-0 mb-8 z-30">
        <Button
          className={classNames(
            { "opacity-0": (maybeWindow?.scrollY ?? 0) > 0 },
            "border-none hover:bg-transparent flex transition-opacity duration-300 will-change-scroll",
          )}
          onClick={onArrowDownClick}
        >
          <ChevronDown
            className="h-12 md:h-24 w-auto position-relative"
            strokeWidth={1}
            viewBox="0 -12 24 48"
            preserveAspectRatio="none"
          />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
