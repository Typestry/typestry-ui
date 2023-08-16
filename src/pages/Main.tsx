import { For } from "solid-js"
import { SocialContainer } from "../components/SocialContainer"
import { socialData } from "../constants/socialData"
import { SocialLink } from "../components/SocialLink"
import us from "../../assets/johnandjustin.jpg"
import carriedByBees from "../../assets/carriedbybees.png"
import { bandAssets } from "../constants/bandAssets"

export const Main = () => {
  return (
    <>
      <div class="max-w-full py-12">
        <img src={carriedByBees} />
      </div>
      <div class="border border-black p-2 max-w-full md:max-w-lg bg-white text-black">
        <img
          width="1000"
          height="1000"
          class="h-auto grayscale"
          src={us}
          alt="Photo of bandmates John Benda and Justin Klaas (Bliss album cover)"
        />
        <article class="py-4">{bandAssets.shortBio}</article>
      </div>
      <div class="max-w-lg">
        <SocialContainer>
          <For each={Object.values(socialData)}>
            {(item) => <SocialLink item={item} />}
          </For>
        </SocialContainer>
      </div>
    </>
  )
}
