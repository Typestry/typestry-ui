import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router"

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col h-full w-full items-center px-4 md:px-8 py-12 snap-start snap-always"
      >
        <Outlet />
      </main>
    </div>
  )
}
