import classNames from "classnames"
import { NavItemParams } from "../../types/NavItemParams"
import { ContactForm } from "../ContactForm"
import { BandcampPlayer } from "../BandcampPlayer"
import { ListShow } from "../ListShow"
import { useMemo } from "react"
import { useBandPageContext } from "../../providers/BandPageProvider"

interface SectionProps {
  section: NavItemParams
  handleRef: (ref: HTMLElement) => void
}

const HEADER_CLASS =
  "text-3xl font-serif font-bold tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"

export const Section = ({ section, handleRef }: SectionProps) => {
  const { id, sectionName, type } = section
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()

  const sectionClasses = classNames("flex flex-col gap-y-4", {
    "min-h-[600px] justify-center": type === "showList",
  })

  const SectionComponent = useMemo(
    () => getSectionComponent(section),
    [section],
  )

  return (
    <section ref={handleRef} id={id} className={sectionClasses}>
      {sectionName ? (
        <h4 className={classNames(HEADER_CLASS, theme?.sectionHeaderClassName)}>
          {sectionName}
        </h4>
      ) : null}
      <SectionComponent />
    </section>
  )
}

const getSectionComponent = (section: NavItemParams) => {
  switch (section.type) {
    case "contact":
      return () => <ContactForm onSubmit={section.onSubmit} />
    case "musicPlayer":
      return () => <BandcampPlayer albumId={section.bandcampAlbumId} />
    case "showList":
      return () => <ListShow shows={section.shows} />
    case "custom":
      return section.component
  }
}
