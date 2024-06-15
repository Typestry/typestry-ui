import Section, { SectionProps } from "@/components/Section"
import _sortBy from "lodash/sortBy"
import FirebaseAdmin from "@/services/FirebaseAdmin"
import jsonDeepCopy from "@/utils/jsonDeepCopy"

export default async function Main() {
  const sections = await getData()
  const parsedSections = jsonDeepCopy(sections)

  return (
    <div className="flex flex-col gap-y-24 lg:max-w-2xl w-full">
      {_sortBy(parsedSections, "order").map((section) => {
        return <Section key={section.id} section={section} />
      })}
    </div>
  )
}

async function getData() {
  const admin = FirebaseAdmin.getInstance()
  return admin.getDataFromCollection<SectionProps["section"]>("sections")
}
