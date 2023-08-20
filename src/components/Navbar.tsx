import { useCallback, useEffect, useRef, useState } from "react"
import { NavItemParams } from "../types/NavItemParams"
import { NavItem } from "./NavItem"
import { SocialContainer } from "./SocialContainer"
import { SocialLink } from "./SocialLink"
import { socialData } from "../constants/socialData"

interface NavbarProps {
  navItems: Array<NavItemParams>
  activeItem: NavItemParams
  setActiveItem: (navItemName: NavItemParams) => void
}

export const Navbar = ({
  navItems,
  activeItem,
  setActiveItem,
}: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)
  const [anchorPoints, setAnchorPoints] = useState<{ [key: string]: number }>(
    {},
  )

  useEffect(() => {
    navItems.forEach((item) => {
      const currentPosition = window.scrollY
      const element = document.getElementById(item.id)
      const anchor =
        (element?.getBoundingClientRect().top ?? 0) + currentPosition
      setAnchorPoints((prev) => ({ ...prev, [item.id]: anchor }))
    })
  }, [navItems])

  const onScroll = useCallback(() => {
    for (const section in anchorPoints) {
      if (anchorPoints[section] >= window.scrollY) {
        const item = navItems.find((item) => item.id === section)
        item && setActiveItem(item)
        break
      }
    }
  }, [anchorPoints])

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [anchorPoints])

  return (
    <nav
      ref={navRef}
      className="bg-[#222222] flex flex-col justify-center items-center gap-y-4 md:gap-y-8 py-4 md:py-8 sticky top-0 z-40 h-full"
    >
      <h1 className="text-3xl md:text-6xl font-serif font-light tracking-[0.3rem]">
        CARRIED BY BEES
      </h1>
      <ul className="flex gap-x-6">
        {navItems.map((item) => (
          <NavItem key={item.id} {...item} active={item.id === activeItem.id} />
        ))}
      </ul>
      <SocialContainer>
        {Object.values(socialData).map((datum) => (
          <SocialLink key={datum.title} {...datum} />
        ))}
      </SocialContainer>
    </nav>
  )
}
