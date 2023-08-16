import { createSocialLink } from "../components/socialLink"
import { socialData } from "../constants/socialData"
import { createMainLayout } from "../layouts/main"
import blissCover from "../../assets/Bliss_fixed.png"

export const createHome = () => {
  const image = document.createElement("img")
  const wrapper = document.createElement("div")
  const linkSection = document.createElement("section")
  const socialLinks = Object.values(socialData).map((socialDatum) =>
    createSocialLink({ item: socialDatum }),
  )

  image.src = blissCover
  image.className = "max-w-full h-auto"
  image.width = 1200
  image.height = 1200
  image.alt =
    "Photo of bandmates John Benda and Justin Klaas (Bliss album cover)"

  linkSection.className = "grid grid-flow-col gap-x-8 grid-cols-4 h-full"
  linkSection.ariaLabel = "social media and music links"
  socialLinks.forEach((link) => linkSection.appendChild(link))

  wrapper.className = "max-w-[1200px] w-full"
  wrapper.appendChild(image)
  wrapper.appendChild(linkSection)

  return createMainLayout({ children: wrapper })
}
