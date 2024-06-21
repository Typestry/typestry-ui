import { ComponentProps, FC } from "react"
import { MediaLink, MediaType } from "@/types/Config"
import { ReactComponent as Instagram } from "@/assets/image/instagram.svg"
import { ReactComponent as Facebook } from "@/assets/image/facebook.svg"
import { ReactComponent as Spotify } from "@/assets/image/spotify.svg"
import { ReactComponent as Apple } from "@/assets/image/apple.svg"
import { ReactComponent as Bandcamp } from "@/assets/image/bandcamp.svg"
import classNames from "classnames"

interface SocialLinkProps extends Omit<MediaLink, "title"> {
  type: MediaType
  slotProps?: {
    root?: ComponentProps<"a">
    icon?: ComponentProps<"svg">
  }
}

export const SocialLinkIcons = {
  apple: Apple,
  bandcamp: Bandcamp,
  facebook: Facebook,
  instagram: Instagram,
  spotify: Spotify,
} as const

const SocialLink = ({ url, alt, type, slotProps }: SocialLinkProps) => {
  const Icon = SocialLinkIcons[type] as unknown as FC<ComponentProps<"svg">>

  return (
    <a
      type="button"
      target="_blank"
      className="cursor-pointer"
      href={url}
      aria-label={alt}
    >
      <Icon
        {...slotProps?.icon}
        className={classNames(
          "w-6 h-6 md:w-8 md:h-8 social-link",
          slotProps?.icon?.className,
        )}
      />
    </a>
  )
}

export default SocialLink
