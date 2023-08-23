import { useRef } from "react"
import { NavItemParams } from "../../types/NavItemParams"
import { NavItem } from "../NavItem"
import { SocialContainer } from "../SocialContainer"
import { SocialLink } from "../SocialLink"
import { socialData } from "../../constants/socialData"
import { useLocation } from "react-router"

const DESKTOP_HEIGHT = 252
const MOBILE_HEIGHT = 170

interface NavbarProps {
  navItems: Array<NavItemParams>
}

export const Navbar = ({ navItems }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  return (
    <nav
      ref={navRef}
      className={`bg-[#222222] flex flex-col justify-center items-center gap-y-4 md:gap-y-8 py-4 md:py-8 sticky top-0 z-40 h-[${MOBILE_HEIGHT}px] md:h-[${DESKTOP_HEIGHT}px]`}
    >
      <h1 className="text-3xl md:text-6xl font-serif font-light tracking-[0.3rem]">
        CARRIED BY BEES
      </h1>
      <ul className="flex gap-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavItem
              {...item}
              id={item.id}
              active={location.hash.split("#")[1] === item.id}
            />
          </li>
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
