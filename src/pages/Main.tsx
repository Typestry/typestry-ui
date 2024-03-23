import { useBandPageContext } from "../providers/BandPageProvider"

import { Section } from "../components/Section"

export const Main = () => {
  const { sections } = useBandPageContext()

  return (
    <div className="flex flex-col gap-y-24 lg:max-w-2xl w-full">
      {sections.map((section) => {
        return <Section key={section.id} section={section} />
      })}
    </div>
  )
}
