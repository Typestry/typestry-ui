import { useRef } from "react"
import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router"
import { useBandPageContext } from "../providers/BandPageProvider"

export const MainLayout = () => {
  const layoutRef = useRef<HTMLDivElement>(null)
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()
  const { sections } = useBandPageContext()

  return (
    <div ref={layoutRef} className={theme?.backgroundClassName}>
      <Navbar navItems={sections} />
      <main
        id="home"
        className="flex flex-col h-full w-full items-center px-4 md:px-8 py-12"
      >
        <Outlet />
      </main>
    </div>
  )
}
