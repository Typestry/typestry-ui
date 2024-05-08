import { FC, useMemo } from "react"
import {
  Route,
  RouterProvider as ReactRouterProvider,
  Routes,
} from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import { createBrowserRouter } from "react-router-dom"

const RootDefault = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

export const RouterProvider: FC = () => {
  const router = useMemo(
    () => createBrowserRouter([{ path: "*", Component: RootDefault }]),
    [RootDefault],
  )

  return <ReactRouterProvider router={router} />
}
