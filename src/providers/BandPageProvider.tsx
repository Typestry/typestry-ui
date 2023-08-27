import { createContext, useContext, FC, useMemo } from "react"
import { BandPageConfig } from "../types/BandPageConfig"
import { Helmet } from "react-helmet"
import { SectionParams } from "../types/SectionParams"
import { Route, RouterProvider, Routes } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import { createBrowserRouter } from "react-router-dom"

interface BandPageContextProps {
  bandPageConfig: BandPageConfig
  sections: Array<SectionParams>
}

const BandPageContext = createContext<BandPageContextProps | undefined>(
  undefined,
)

const RootDefault = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

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
  sections: Array<SectionParams>
  root?: () => JSX.Element
}

export const BandPageProvider: FC<BandPageProviderProps> = ({
  bandPageConfig,
  sections,
  root: Root,
}) => {
  const router = useMemo(
    () => createBrowserRouter([{ path: "*", Component: Root ?? RootDefault }]),
    [Root, RootDefault],
  )

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
      <RouterProvider router={router} />
    </BandPageContext.Provider>
  )
}
