import { ComponentProps } from "react"
import { MediaLink } from "../../types/MediaLink"
import classNames from "classnames"

type SocialLinkProps = ComponentProps<"div"> & MediaLink

export const SocialLink = ({ icon, url, alt, ...rest }: SocialLinkProps) => {
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
        <img
          src={icon}
          className="flex w-12 md:p-2 justify-center items-center"
        />
      </a>
    </div>
  )
}
