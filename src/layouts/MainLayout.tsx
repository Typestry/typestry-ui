import { useRef } from "react"
import { Navbar } from "../components/Navbar"
import { Outlet } from "react-router"
import { SocialLink } from "../components/SocialLink"
import { useBandPageContext } from "../providers/BandPageProvider"
import { MediaLink, MediaType } from "../types/BandPageConfig"

export const MainLayout = () => {
  const mainRef = useRef<HTMLElement>(null)

  const {
    bandPageConfig: { mediaLinks },
  } = useBandPageContext()

  const socialLinks = Object.entries(mediaLinks) as Array<
    [MediaType, MediaLink]
  >

  return (
    <div>
      <Navbar onArrowDownClick={() => mainRef.current?.scrollIntoView()} />
      <main
        ref={mainRef}
        id="home"
        className="flex flex-col h-full w-full items-center px-4 lg:px-8 py-12 pb-[calc(72px+32px)] md:pb-[calc(78px+32px)]"
      >
        <Outlet />
      </main>
      <footer className="fixed bottom-0 lg:top-0 flex justify-center left-0 right-0 lg:right-auto bg-[var(--background-color)] lg:bg-transparent lg:justify-start shadow-md shadow-gray-300 lg:shadow-none z-30">
        <div className="flex lg:flex-col gap-12 p-6">
          {socialLinks.map(([type, datum]) => (
            <SocialLink
              key={datum.title}
              className="z-50"
              {...{ ...datum, type }}
            />
          ))}
        </div>
      </footer>
    </div>
  )
}
