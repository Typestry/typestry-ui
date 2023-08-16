import { SocialData } from "../constants/socialData"
import { createTooltip } from "./tooltip"

interface SocialLinkProps {
  item: SocialData[keyof SocialData]
}

export const createSocialLink = ({ item }: SocialLinkProps) => {
  const link = document.createElement("a")
  const image = document.createElement("img")
  const onClick = () => navigator.vibrate(200)

  link.setAttribute("data-tooltip-target", `tooltip-default-${item.title}`)
  link.className = "mb-auto bg-[#222222] mx-auto p-2 rounded-xl"
  link.href = item.url
  link.setAttribute("aria-label", item.alt)
  link.onclick = onClick
  link.target = "_blank"

  image.className = "h-8 md:h-10 hover:opacity-[0.5]"
  image.src = item.image
  link.appendChild(image)

  return createTooltip({ children: link, title: item.title })
}
