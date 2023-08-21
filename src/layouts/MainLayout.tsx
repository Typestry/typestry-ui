import { ReactNode, useState } from "react"
import { Navbar } from "../components/Navbar"
import { NavItemParams } from "../types/NavItemParams"

interface MainLayoutProps {
  children: ReactNode
}

const navItems = [
  { name: "LISTEN", id: "listen" },
  { name: "SHOWS", id: "shows" },
  { name: "CONTACT", id: "contact" },
]

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [activeItem, setActiveItem] = useState<NavItemParams>(navItems[0])

  return (
    <div className="bg-grass bg-no-repeat md:bg-center bg-right bg-blend-color-burn bg-[rgb(0,0,0,0.5)] md:bg-transparent bg-fixed md:bg-cover">
      <Navbar
        navItems={navItems}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <main className="flex flex-col h-full w-full items-center gap-8 p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
