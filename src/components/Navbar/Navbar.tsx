"use client"

import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import { useEventListener } from "@/hooks/useEventListener"
import { Button } from "../Button"
import { ChevronDown } from "react-feather"
import _throttle from "lodash/throttle"
import { useConfig } from "@/hooks/useConfig"
import { isClient } from "@/utils/isClient/isClient"

const maybeWindow = isClient() ? window : null

export const Navbar = () => {
  const { data } = useConfig()
  const [opacity, setOpacity] = useState(100)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    const { bottom, height } = navRef.current?.getBoundingClientRect()!
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
      ref={navRef}
      style={{ opacity, backgroundImage: `url("${data?.bannerImageUrl}")` }}
      className="nav-desktop h-[calc(100dvh-72px)] md:h-[calc(100dvh-78px)] lg:h-[100dvh] transition-opacity ease-in-out w-full p-0"
    >
      <div className="flex flex-col h-full gap-y-4 lg:gap-y-8 py-4 overflow-hidden">
        <h1 className="m-auto font-light">{data?.bandName}</h1>
      </div>
      <div className="absolute bottom-0 pb-8 z-30">
        <Button
          className={classNames(
            { "opacity-0": (maybeWindow?.scrollY ?? 0) > 0 },
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
