import FirebaseService from "../services/firebaseService"
import { BandPageProvider } from "../providers/BandPageProvider"

import { useGetDocuments } from "../hooks/useGetDocuments"
import { SectionParams } from "../types/SectionParams"
import { orderBy } from "lodash"
import { BandPageConfig } from "../types/BandPageConfig"

FirebaseService.init()

export const App = () => {
  const { data: unorderedSections, loading: sectionsLoading } =
    useGetDocuments<SectionParams>("sections")

  const {
    data: [bandPageConfig],
    loading: bandPageConfigLoading,
  } = useGetDocuments<BandPageConfig>("configs")

  const sections = orderBy(unorderedSections, "order", "asc")

  if (sectionsLoading || bandPageConfigLoading) return null

  return <BandPageProvider {...{ sections, bandPageConfig }} />
}
