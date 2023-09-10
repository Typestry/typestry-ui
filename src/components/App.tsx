import FirebaseService from "../services/firebaseService"
import { BandPageProvider } from "../providers/BandPageProvider"
import bandPageConfig from "../bandpage.config"
import { useGetDocuments } from "../hooks/useGetDocuments"
import { SectionParams } from "../types/SectionParams"
import { orderBy } from "lodash"

FirebaseService.init()

export const App = () => {
  const { data: sections } = useGetDocuments<SectionParams>("sections")
  const ordered = orderBy(sections, "order", "asc")

  return <BandPageProvider bandPageConfig={bandPageConfig} sections={ordered} />
}
