import { FC } from "react"
import { useGetDownloadUrls } from "../../hooks/useGetDownloadUrls"

interface GalleryProps {
  imagePaths: string[]
}

export const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  const { data: images } = useGetDownloadUrls({ paths: imagePaths })

  if (!images) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <img className="h-auto max-w-full rounded-lg" src={img} alt="" />
      ))}
    </div>
  )
}
