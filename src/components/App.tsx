import { Helmet } from "react-helmet"
import { MainLayout } from "../layouts/MainLayout"
import { Main } from "../pages/Main"
import { metaData, linkData } from "../constants/metaData"
import { bandAssets } from "../constants/bandAssets"
import FirebaseService from "../services/firebaseService"

FirebaseService.init()

export const App = () => {
  return (
    <MainLayout>
      <Helmet>
        {metaData.map((datum, index) => (
          <meta key={String(index)} {...datum} />
        ))}
        {linkData.map((datum, index) => (
          <link key={String(index)} {...datum} />
        ))}
        <title>{bandAssets.bandName} - Home</title>
      </Helmet>
      <Main />
    </MainLayout>
  )
}
