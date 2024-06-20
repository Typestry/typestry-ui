import { ComponentProps } from "react"

interface BandcampPlayerProps extends ComponentProps<"div"> {
  url: string
}

const BandcampPlayer = ({ url, ...rest }: BandcampPlayerProps) => {
  return (
    <div {...rest}>
      <div className="left-0 w-full h-0 relative pb-[100%]">
        <iframe
          src={url}
          className="top-0 left-0 w-full h-full absolute border-0 overflow-none"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default BandcampPlayer
