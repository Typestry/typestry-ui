import { SocialContainer } from "../SocialContainer"
import { SocialLink } from "../SocialLink"
import { useBandPageContext } from "../../providers/BandPageProvider"
import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import { useEventListener } from "../../hooks/useEventListener"

export const Navbar = () => {
  const {
    bandPageConfig: { bandName, mediaLinks },
  } = useBandPageContext()
  const [isHidden, setIsHidden] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    const { bottom } = navRef.current?.getBoundingClientRect()!
    setIsHidden(bottom < 0)
  }, [setIsHidden])

  useEventListener(window, "scroll", onScroll)

  return (
    <>
      <nav
        ref={navRef}
        className={classNames(
          { "opacity-0": isHidden },
          "bg-grass flex flex-col justify-center items-center md:py-8 bg-[#222222] transition-all duration-1000 ease-in-out h-[100vh] snap-end opacity-1 snap-always will-change-scroll",
        )}
      >
        <div className="flex flex-col items-center gap-y-4 md:gap-y-8 py-4">
          <h1>{bandName}</h1>
          <SocialContainer>
            {Object.values(mediaLinks).map((datum) => (
              <SocialLink
                key={datum.title}
                {...datum}
                className="w-8 md:w-12"
              />
            ))}
          </SocialContainer>
        </div>
      </nav>
      <nav
        className={classNames(
          {
            "opacity-1 bg-[#222222] xl:bg-transparent": isHidden,
          },
          { "opacity-0": !isHidden },
          "sticky top-0 z-40 p-8 flex justify-between items-center transition-opacity duration-150 ease-in-out shadow-md xl:shadow-none",
        )}
      >
        <h6
          className="tracking-widest cursor-pointer"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {bandName}
        </h6>
        <div>
          <SocialContainer>
            {Object.values(mediaLinks).map((datum) => (
              <SocialLink
                key={datum.title}
                {...datum}
                className="w-5 md:w-12"
              />
            ))}
          </SocialContainer>
        </div>
      </nav>
    </>
  )
}
