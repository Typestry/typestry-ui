import { Helmet } from "react-helmet"
import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import { metaData, linkData } from "../constants/metaData"
import { bandAssets } from "../constants/bandAssets"
import FirebaseService from "../services/firebaseService"
import { Route, RouterProvider, Routes } from "react-router"
import { createBrowserRouter } from "react-router-dom"

FirebaseService.init()

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

export const App = () => {
  return (
    <>
      <Helmet>
        {metaData.map((datum, index) => (
          <meta key={String(index)} {...datum} />
        ))}
        {linkData.map((datum, index) => (
          <link key={String(index)} {...datum} />
        ))}
        <title>{bandAssets.bandName} - Home</title>
      </Helmet>
      <RouterProvider router={router} />
    </>
  )
}
