import { For } from "solid-js"
import { SocialContainer } from "../components/SocialContainer"
import { socialData } from "../constants/socialData"
import { SocialLink } from "../components/SocialLink"
import blissCover from "../../assets/Bliss_fixed.png"
import { bandAssets } from "../constants/bandAssets"

export const Main = () => {
  return (
    <>
      <img
        width="1000"
        height="1000"
        class="max-w-full h-auto"
        src={blissCover}
        alt="Photo of bandmates John Benda and Justin Klaas (Bliss album cover)"
      />
      <div class="max-w-lg">
        <article class="pt-8 pb-12">{bandAssets.shortBio}</article>
        <div class="border-t border-t-white pb-12" />
        <SocialContainer>
          <For each={Object.values(socialData)}>
            {(item) => <SocialLink item={item} />}
          </For>
        </SocialContainer>
      </div>
    </>
  )
}
