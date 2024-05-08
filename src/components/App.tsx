import { useConfig } from "../hooks/useConfig"
import { raise } from "../utils/raise/raise"
import { Helmet } from "react-helmet-async"
import { RouterProvider } from "../providers/RouterProvider"

export const App = () => {
  const { data, status } = useConfig()

  switch (status) {
    case "pending":
      return null
    case "error":
      return raise("Error loading config")
  }

  const { bandName, keywords, description, socialImage } = data

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{bandName}</title>
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="description" content={description} />
        <meta name="og:title" content={bandName} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={socialImage} />
      </Helmet>
      <RouterProvider />
    </>
  )
}
