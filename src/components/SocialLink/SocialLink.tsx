import { ComponentProps, FC } from "react"
import { MediaLink, MediaType } from "../../types/BandPageConfig"
import Instagram from "../../assets/image/instagram.svg"
import Facebook from "../../assets/image/facebook.svg"
import Spotify from "../../assets/image/spotify.svg"
import Apple from "../../assets/image/apple.svg"
import Bandcamp from "../../assets/image/bandcamp.svg"

type SocialLinkProps = ComponentProps<"div"> & MediaLink & { type: MediaType }

const IconMap = {
  apple: Apple,
  bandcamp: Bandcamp,
  facebook: Facebook,
  instagram: Instagram,
  spotify: Spotify,
} as const

export const SocialLink = ({ url, alt, type }: SocialLinkProps) => {
  const Icon = IconMap[type] as unknown as FC<ComponentProps<"svg">>

  return (
    <a
      type="button"
      target="_blank"
      className="cursor-pointer"
      href={url}
      aria-label={alt}
    >
      <Icon className="w-6 h-6 md:w-8 md:h-8 social-link" />
    </a>
  )
}
