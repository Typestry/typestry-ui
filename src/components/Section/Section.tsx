import classNames from "classnames"
import { NavItemParams } from "../../types/NavItemParams"
import { useBandPageContext } from "../../providers/BandPageProvider"

interface SectionProps {
  section: NavItemParams
  handleRef: (ref: HTMLElement) => void
}

const HEADER_CLASS =
  "text-3xl font-serif font-bold tracking-wide drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"

export const Section = ({ section, handleRef }: SectionProps) => {
  const { id, sectionName, component: Component, className } = section
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()

  const sectionClasses = classNames("flex flex-col gap-y-12", className)

  return (
    <section ref={handleRef} id={id} className={sectionClasses}>
      {sectionName ? (
        <h4 className={classNames(HEADER_CLASS, theme?.sectionHeaderClassName)}>
          {sectionName}
        </h4>
      ) : null}
      <Component />
    </section>
  )
}
