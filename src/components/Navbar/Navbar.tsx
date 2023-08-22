import { useEffect } from "react"
import { NavItemParams } from "../../types/NavItemParams"
import { NavItem } from "../NavItem"
import { SocialContainer } from "../SocialContainer"
import { SocialLink } from "../SocialLink"
import { socialData } from "../../constants/socialData"
import { useLocation, useNavigate } from "react-router"

const ACTIVE_CLASSES = ["border-fuchsia-300", "text-fuchsia-300", "border-b-2"]

interface NavbarProps {
  navItems: Array<NavItemParams>
}

export const Navbar = ({ navItems }: NavbarProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const id = target.getAttribute("id")
          if (isIntersecting) {
            navigate(`#${id}`)
          }
        }
      },
      { threshold: 1 },
    )

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.querySelectorAll("nav li a").forEach((el) => {
      const href = el.getAttribute("href")
      const id = href?.split("#")[1]
      if (id === location.hash.split("#")[1]) {
        el.classList.add(...ACTIVE_CLASSES)
      } else {
        el.classList.remove(...ACTIVE_CLASSES)
      }
    })
  }, [location])

  return (
    <nav className="bg-[#222222] flex flex-col justify-center items-center gap-y-4 md:gap-y-8 py-4 md:py-8 sticky top-0 z-40 h-full">
      <h1 className="text-3xl md:text-6xl font-serif font-light tracking-[0.3rem]">
        CARRIED BY BEES
      </h1>
      <ul className="flex gap-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavItem {...item} id={item.id} />
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
