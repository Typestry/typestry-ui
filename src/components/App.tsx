import FirebaseService from "../services/firebaseService"
import { BandPageProvider } from "../providers/BandPageProvider"

import { useGetDocuments } from "../hooks/useGetDocuments"
import { SectionParams } from "../types/SectionParams"
import { orderBy } from "lodash"
import { BandPageConfig } from "../types/BandPageConfig"
import { useGetDownloadUrls } from "../hooks/useGetDownloadUrls"

FirebaseService.init()

export const App = () => {
  const { data: unorderedSections, loading: sectionsLoading } =
    useGetDocuments<SectionParams>("sections")

  const {
    data: [bandPageConfig],
    loading: bandPageConfigLoading,
  } = useGetDocuments<BandPageConfig>("configs")

  const { data, loading: urlLoading } = useGetDownloadUrls({
    paths: [bandPageConfig?.bannerImageUrl],
    isEnabled: Boolean(bandPageConfig),
  })

  const sections = orderBy(unorderedSections, "order", "asc")

  if (sectionsLoading || bandPageConfigLoading || urlLoading) return null

  return (
    <BandPageProvider
      {...{
        sections,
        bandPageConfig: { ...bandPageConfig, bannerImageUrl: data[0] },
      }}
    />
  )
}
