import { ComponentProps } from "react"
import { MediaLink } from "../../types/MediaLink"
import classNames from "classnames"

type SocialLinkProps = ComponentProps<"div"> & MediaLink

export const SocialLink = ({
  icon: Icon,
  url,
  alt,
  ...rest
}: SocialLinkProps) => {
  return (
    <div
      {...rest}
      className={classNames(
        "transition-colors duration-300 hover:opacity-50 bg-[#33333] cursor-pointer",
        rest.className,
      )}
    >
      <a
        type="button"
        target="_blank"
        className="h-full"
        href={url}
        aria-label={alt}
      >
        <Icon className="fill-white text-2xl md:text-3xl" />
      </a>
    </div>
  )
}
