import { SocialData } from "../constants/socialData"

type SocialLinkProps = SocialData[keyof SocialData]

export const SocialLink = ({ image, url, alt, ...rest }: SocialLinkProps) => {
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
        <img className="h-full" src={image} />
      </a>
    </div>
  )
}
