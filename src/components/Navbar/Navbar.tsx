import { SocialContainer } from "../SocialContainer"
import { SocialLink } from "../SocialLink"
import { useBandPageContext } from "../../providers/BandPageProvider"
import classNames from "classnames"
import { useCallback, useRef, useState } from "react"
import { useEventListener } from "../../hooks/useEventListener"
import { Button } from "../Button"
import { ChevronDown } from "react-feather"

interface NavBarProps {
  onArrowDownClick: () => void
}

export const Navbar = ({ onArrowDownClick }: NavBarProps) => {
  const {
    bandPageConfig: { bandName, mediaLinks },
  } = useBandPageContext()
  const [opacity, setOpacity] = useState(100)
  console.log(opacity)
  const navRef = useRef<HTMLElement>(null)

  const onScroll = useCallback(() => {
    const { bottom, height } = navRef.current?.getBoundingClientRect()!
    const opacity = bottom / height
    if (opacity > 0) {
      setOpacity(bottom / height)
    }
  }, [setOpacity])

  useEventListener(window, "scroll", onScroll)

  const isHidden = opacity < 0.2

  return (
    <>
      <nav ref={navRef} style={{ opacity }} className="nav-desktop">
        <div className="flex flex-col items-center gap-y-4 md:gap-y-8 py-4 overflow-x-hidden">
          <h1>{bandName}</h1>
          <SocialContainer className="gap-x-12 py-8">
            {Object.values(mediaLinks).map((datum) => (
              <SocialLink
                key={datum.title}
                {...datum}
                className="w-8 md:w-12"
              />
            ))}
          </SocialContainer>
        </div>
        <div className="absolute bottom-0 flex justify-center mb-8">
          <Button
            className={classNames(
              { "opacity-0": window.scrollY > 0 },
              "border-none hover:bg-transparent bottom-0 mb-8 animate-bounce flex transition-opacity duration-300 will-change-scroll",
            )}
            onClick={onArrowDownClick}
          >
            <ChevronDown
              size={100}
              strokeWidth={1}
              viewBox="0 -12 24 48"
              preserveAspectRatio="none"
            />
          </Button>
        </div>
      </nav>
      <nav data-hidden={isHidden} className="nav-mobile">
        <h6 className="tracking-widest">{bandName}</h6>
        <div>
          <SocialContainer className="gap-x-2">
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
