import { Section } from "../components/Section"
import _sortBy from "lodash/sortBy"
import { FirebaseAdmin } from "@/services/FirebaseAdmin"

export default async function Main() {
  const sections = await getData()
  return (
    <div className="flex flex-col gap-y-24 lg:max-w-2xl w-full">
      {_sortBy(JSON.parse(JSON.stringify(sections)), "order").map((section) => {
        return <Section key={section.id} section={section} />
      })}
    </div>
  )
}

export async function getData() {
  const admin = FirebaseAdmin.getInstance()
  const db = admin.getApp().firestore()
  const result = await db.collection("sections").get()
  const sections = result.docs.map((doc) => {
    const data = doc.data()
    return { ...data, id: doc.id }
  })

  return sections
}
