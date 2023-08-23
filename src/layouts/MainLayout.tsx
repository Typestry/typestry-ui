import { useRef } from "react"
import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router"

const navItems = [
  { name: "LISTEN", id: "listen" },
  { name: "SHOWS", id: "shows" },
  { name: "CONTACT", id: "contact" },
]

export const MainLayout = () => {
  const layoutRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={layoutRef}
      className="bg-grass bg-no-repeat md:bg-center bg-left bg-[rgb(0,0,0,0.5)] md:bg-transparent bg-fixed bg-cover"
    >
      <Navbar navItems={navItems} />
      <main
        id="home"
        className="flex flex-col h-full w-full items-center px-4 md:px-8 py-12"
      >
        <Outlet />
      </main>
    </div>
  )
}
