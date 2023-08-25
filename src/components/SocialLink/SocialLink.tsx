import { MediaLink } from "../../types/MediaLink"

export const SocialLink = ({ icon, url, alt, ...rest }: MediaLink) => {
  return (
    <div
      className="h-10 transition-colors duration-300 hover:bg-fuchsia-300 bg-[#33333] rounded-lg p-2 cursor-pointer"
      {...rest}
    >
      <a
        type="button"
        target="_blank"
        className="h-full"
        href={url}
        aria-label={alt}
      >
        <img src={icon} width={24} height={24} />
      </a>
    </div>
  )
}
