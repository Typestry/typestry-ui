import { FC, useState } from "react"
import { useGetDownloadUrls } from "../../hooks/useGetDownloadUrls"
import { ImageDialog } from "./ImageDialog/ImageDialog"

interface GalleryProps {
  imagePaths: string[]
}

export const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  const { data: images } = useGetDownloadUrls({ paths: imagePaths })
  const [imageIndex, setImageIndex] = useState<number>(NaN)

  if (!images) return null

  console.log(imageIndex)

  return (
    <>
      <ImageDialog
        imgSrc={images[imageIndex]}
        isOpen={!Number.isNaN(imageIndex)}
        onClose={() => setImageIndex(NaN)}
      />
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        <div className="grid gap-4">
          {images.map((img, index) => (
            <img
              onClick={() => setImageIndex(index)}
              key={img}
              className="h-auto max-w-full rounded-lg hover:cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out"
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  )
}
