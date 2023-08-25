import { createContext, useContext, FC, ReactNode } from "react"
import { BandPageConfig } from "../types/BandPageConfig"
import { Helmet } from "react-helmet"
import { NavItemParams } from "../types/NavItemParams"

interface BandPageContextProps {
  bandPageConfig: BandPageConfig
  sections: Array<NavItemParams>
}

const BandPageContext = createContext<BandPageContextProps | undefined>(
  undefined,
)

export const useBandPageContext = (): BandPageContextProps => {
  const context = useContext(BandPageContext)
  if (!context) {
    throw new Error(
      "Please make sure your app is wrapped in the BandPageProvider!",
    )
  }
  return context
}

interface BandPageProviderProps {
  bandPageConfig: BandPageConfig
  sections: Array<NavItemParams>
  children: ReactNode
}

export const BandPageProvider: FC<BandPageProviderProps> = ({
  bandPageConfig,
  sections,
  children,
}) => {
  return (
    <BandPageContext.Provider value={{ bandPageConfig, sections }}>
      <Helmet>
        <meta name="keywords" content={bandPageConfig.keywords.join(" ,")} />
        <meta name="description" content={bandPageConfig.description} />
        <meta name="og:title" content={bandPageConfig.bandName} />
        <meta name="og:description" content={bandPageConfig.description} />
        <meta name="og:image" content={bandPageConfig.socialImage} />
        <title>{bandPageConfig.bandName}</title>
      </Helmet>
      {children}
    </BandPageContext.Provider>
  )
}
