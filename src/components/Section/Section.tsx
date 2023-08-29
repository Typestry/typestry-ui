import { SectionParams } from "../../types/SectionParams"

interface SectionProps {
  section: SectionParams
}

export const Section = ({ section }: SectionProps) => {
  const { id, sectionName, component: Component } = section

  return (
    <section id={id} className="flex flex-col justify-center w-full gap-y-12">
      {sectionName ? <h4>{sectionName}</h4> : null}
      <Component />
    </section>
  )
}
