interface BandcampPlayerProps {
  albumId: number
}

export const BandcampPlayer = ({ albumId }: BandcampPlayerProps) => {
  return (
    <div className="w-full">
      <div className="left-0 w-full h-0 relative pb-[100%]">
        <iframe
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/`}
          className="top-0 left-0 w-full h-full absolute border-0 overflow-none"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
