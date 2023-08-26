import { useRef } from "react"
import { NavItemParams } from "../../types/NavItemParams"
import { NavItem } from "../NavItem"
import { SocialContainer } from "../SocialContainer"
import { SocialLink } from "../SocialLink"
import { Location, useLocation } from "react-router"
import { useBandPageContext } from "../../providers/BandPageProvider"
import classNames from "classnames"

interface NavbarProps {
  navItems: Array<NavItemParams>
}

export const Navbar = ({ navItems }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null)
  const {
    bandPageConfig: { bandName, mediaLinks, theme },
  } = useBandPageContext()
  const location = useLocation()

  return (
    <nav
      ref={navRef}
      className={classNames(
        "flex flex-col justify-center items-center gap-y-4 md:gap-y-8 py-4 md:py-8 bg-[#222222]",
        theme?.bannerClassName,
      )}
    >
      <h1
        className={classNames(
          "text-4xl md:text-8xl font-serif text-center font-light tracking-[0.3rem] uppercase",
          theme?.bannerTextClassName,
        )}
      >
        {bandName}
      </h1>
      <ul className="flex gap-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavItem
              name={item.name}
              id={item.id}
              active={isActive(location, item.id)}
            />
          </li>
        ))}
      </ul>
      <SocialContainer>
        {Object.values(mediaLinks).map((datum) => (
          <SocialLink key={datum.title} {...datum} />
        ))}
      </SocialContainer>
    </nav>
  )
}

const isActive = (location: Location, id: string) => {
  return location.hash.split("#")[1] === id
}
