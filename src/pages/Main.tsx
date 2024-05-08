import { Section } from "../components/Section"
import { useSections } from "../components/Section/hooks"
import { raise } from "../utils/raise/raise"
import _sortBy from "lodash/sortBy"

export const Main = () => {
  const { data, status } = useSections()

  switch (status) {
    case "pending":
      return null
    case "error":
      return raise("Error loading config")
  }

  return (
    <div className="flex flex-col gap-y-24 lg:max-w-2xl w-full">
      {_sortBy(data, "order").map((section) => {
        return <Section key={section.id} section={section} />
      })}
    </div>
  )
}
