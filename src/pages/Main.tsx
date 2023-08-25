import { useNavigate } from "react-router"
import { useInterSectionObserver } from "../hooks/useIntersectionObserver"
import { useCallback, useRef } from "react"
import { useBandPageContext } from "../providers/BandPageProvider"

import { Section } from "../components/Section"

export const Main = () => {
  const { sections } = useBandPageContext()
  const navigate = useNavigate()
  const refs = useRef<Array<HTMLElement>>([])

  useInterSectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        const id = target.getAttribute("id")
        if (isIntersecting) {
          navigate(`#${id}`)
          break
        }
      }
    },
    refs.current,
    { threshold: 1 },
  )

  const handleRef = useCallback((ref: HTMLElement) => {
    refs.current.push(ref)
  }, [])

  return (
    <div className="flex flex-col gap-y-24 md:max-w-2xl w-full">
      {sections.map((section) => {
        return <Section section={section} handleRef={handleRef} />
      })}
    </div>
  )
}
