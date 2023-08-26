import { createContext, useContext, FC, ReactNode } from "react"
import { BandPageConfig } from "../types/BandPageConfig"
import { Helmet } from "react-helmet"
import { NavItemParams } from "../types/NavItemParams"
import { Route, RouterProvider, Routes } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import { createBrowserRouter } from "react-router-dom"

interface BandPageContextProps {
  bandPageConfig: BandPageConfig
  sections: Array<NavItemParams>
}

const BandPageContext = createContext<BandPageContextProps | undefined>(
  undefined,
)

const Root = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

const router = createBrowserRouter([{ path: "*", Component: Root }])

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
  children?: ReactNode
}

export const BandPageProvider: FC<BandPageProviderProps> = ({
  bandPageConfig,
  sections,
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
      <RouterProvider router={router} />
    </BandPageContext.Provider>
  )
}
