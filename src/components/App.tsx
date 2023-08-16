import { Meta, MetaProvider, Title } from "@solidjs/meta"
import { MainLayout } from "../layouts/Main"
import { Main } from "../pages/Main"
import { bandAssets } from "../constants/bandAssets"

export const App = () => {
  return (
    <MainLayout>
      <MetaProvider>
        <Meta
          name="keywords"
          content="Carried by Bees, indie music, alternative rock, Kansas City band, John Benda, Justin Klaas"
        />
        <Meta name="description" content={bandAssets.shortBio} />
        <Meta property="og:title" content="Carried by Bees" />
        <Meta property="og:description" content={bandAssets.shortBio} />
        <Meta
          property="og:image"
          content="https://www.carriedbybees.com/assets/Bliss_fixed.png"
        />
        <Title>Carried by Bees</Title>
      </MetaProvider>
      <Main />
    </MainLayout>
  )
}
