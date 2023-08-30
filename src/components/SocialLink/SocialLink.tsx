import { ComponentProps } from "react"
import { MediaLink } from "../../types/MediaLink"

type SocialLinkProps = ComponentProps<"div"> & MediaLink

export const SocialLink = ({ icon: Icon, url, alt }: SocialLinkProps) => {
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
