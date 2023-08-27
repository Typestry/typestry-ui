import { useRef } from "react"
import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router"

export const MainLayout = () => {
  const mainRef = useRef<HTMLElement>(null)

  return (
    <div>
      <Navbar onArrowDownClick={() => mainRef.current?.scrollIntoView()} />
      <main
        ref={mainRef}
        id="home"
        className="flex flex-col h-full w-full items-center px-4 md:px-8 py-12 snap-start snap-always"
      >
        <Outlet />
      </main>
    </div>
  )
}
