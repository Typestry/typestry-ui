import { useBandPageContext } from "../providers/BandPageProvider"

import { Section } from "../components/Section"

export const Main = () => {
  const { sections } = useBandPageContext()

  return (
    <div className="flex flex-col gap-y-24 lg:max-w-2xl w-full mb-10">
      {sections.map((section) => {
        return <Section section={section} />
      })}
    </div>
  )
}
