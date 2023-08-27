import { useBandPageContext } from "../providers/BandPageProvider"

import { Section } from "../components/Section"

export const Main = () => {
  const { sections } = useBandPageContext()

  return (
    <div className="flex flex-col gap-y-24 md:max-w-2xl w-full">
      {sections.map((section) => {
        return <Section section={section} />
      })}
    </div>
  )
}
