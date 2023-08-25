import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import FirebaseService from "../services/firebaseService"
import { Route, RouterProvider, Routes } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import { BandPageProvider } from "../providers/BandPageProvider"
import bandPageConfig from "../bandpage.config"
import { Show } from "../types/Show"
import { useGetDocuments } from "../hooks/useGetDocuments"
import { useFirebaseFunction } from "../hooks/useFirebaseFunction"

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
  const { data: shows } = useGetDocuments<Show>("shows")
  const { runHttpsFunction } = useFirebaseFunction()

  return (
    <BandPageProvider
      bandPageConfig={bandPageConfig}
      sections={[
        {
          name: "LISTEN",
          id: "listen",
          sectionName: "",
          type: "musicPlayer",
          bandcampAlbumId: 662359070,
        },
        {
          name: "SHOWS",
          id: "shows",
          sectionName: "Upcoming Shows",
          type: "showList",
          shows,
        },
        {
          name: "CONTACT",
          id: "contact",
          sectionName: "Contact",
          type: "contact",
          onSubmit: async (payload) =>
            await runHttpsFunction("sendEmail", payload),
        },
      ]}
    >
      <RouterProvider router={router} />
    </BandPageProvider>
  )
}
