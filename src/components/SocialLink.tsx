import { SocialData } from "../constants/socialData"
import { Tooltip } from "./Tooltip"

interface SocialLinkProps {
  item: SocialData[keyof SocialData]
}

export const SocialLink = ({ item }: SocialLinkProps) => {
  const tooltipId = `tooltip-default-${item.title}`

  return (
    <>
      <a
        type="button"
        target="_blank"
        class="bg-[#222222] mx-auto p-2 rounded-xl"
        href={item.url}
        aria-label={item.alt}
        data-tooltip-target={tooltipId}
      >
        <img class="h-8 md:h-10 hover:opacity-[0.5]" src={item.image} />
      </a>
      <Tooltip title={item.title} id={tooltipId} />
    </>
  )
}
