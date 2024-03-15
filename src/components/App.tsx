import FirebaseService from "../services/firebaseService"
import { BandPageProvider } from "../providers/BandPageProvider"

import { useGetDocuments } from "../hooks/useGetDocuments"
import { SectionParams } from "../types/SectionParams"
import { orderBy } from "lodash"
import { BandPageConfig } from "../types/BandPageConfig"
import { useGetDownloadUrls } from "../hooks/useGetDownloadUrls"

FirebaseService.init()

export const App = () => {
  const sections = useGetDocuments<SectionParams>({ collection: "sections" })

  const config = useGetDocuments<BandPageConfig>({
    collection: "configs",
  })

  const urls = useGetDownloadUrls({
    paths: [config.data?.[0].bannerImageUrl ?? ""],
    isEnabled: Boolean(config.data?.length),
  })

  const orderedSections = orderBy(sections.data, "order", "asc")

  switch (true) {
    case sections.loading:
    case config.loading:
    case urls.loading:
      return null
  }

  if (!config.data) throw new Error("No configs found!")
  if (!urls.data) throw new Error("No images found!")

  return (
    <BandPageProvider
      sections={orderedSections}
      bandPageConfig={{ ...config.data[0], bannerImageUrl: urls.data[0] }}
    />
  )
}
