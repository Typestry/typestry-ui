import { ComponentProps } from "react"

interface BandcampPlayerProps {
  url: string
  slotProps?: {
    root?: ComponentProps<"div">
  }
}

const BandcampPlayer = ({ url, slotProps }: BandcampPlayerProps) => {
  return (
    <div {...slotProps?.root}>
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
