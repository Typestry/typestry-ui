import { ComponentProps } from "react"
import { MediaLink, MediaType } from "../../types/BandPageConfig"
import { ReactComponent as Instagram } from "../../assets/image/instagram.svg"
import { ReactComponent as Facebook } from "../../assets/image/facebook.svg"
import { ReactComponent as Spotify } from "../../assets/image/spotify.svg"
import { ReactComponent as Apple } from "../../assets/image/apple.svg"
import { ReactComponent as Bandcamp } from "../../assets/image/bandcamp.svg"

type SocialLinkProps = ComponentProps<"div"> & MediaLink & { type: MediaType }

const IconMap = {
  apple: Apple,
  bandcamp: Bandcamp,
  facebook: Facebook,
  instagram: Instagram,
  spotify: Spotify,
} as const

export const SocialLink = ({ url, alt, type }: SocialLinkProps) => {
  const Icon = IconMap[type]

  return (
    <div className="cursor-pointer">
      <a
        type="button"
        target="_blank"
        className="h-full cursor-pointer"
        href={url}
        aria-label={alt}
      >
        <Icon className="social-link" />
      </a>
    </div>
  )
}
