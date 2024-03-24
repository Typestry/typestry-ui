import { FC, KeyboardEvent, MouseEvent, useState } from "react"
import { useGetDownloadUrls } from "../../hooks/useGetDownloadUrls"
import { ImageDialog } from "./ImageDialog/ImageDialog"

interface GalleryProps {
  imagePaths: string[]
}

export const Gallery: FC<GalleryProps> = ({ imagePaths }) => {
  const { data: images } = useGetDownloadUrls({ paths: imagePaths })
  const [imageIndex, setImageIndex] = useState<number>(NaN)

  if (!images) return null

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    const index = Number(e.currentTarget.getAttribute("data-value"))
    setImageIndex(index)
  }

  const handleImageKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const index = Number(
        (e.target as HTMLImageElement).getAttribute("data-value"),
      )
      setImageIndex(index)
    }
  }

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleClose = () => {
    setImageIndex(NaN)
  }

  return (
    <>
      <ImageDialog
        onNext={handleNext}
        onPrev={handlePrev}
        imgSrc={images[imageIndex]}
        isOpen={!Number.isNaN(imageIndex)}
        onClose={handleClose}
      />
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        <div className="grid gap-4">
          {images.map((img, index) => (
            <img
              tabIndex={0}
              onKeyDown={handleImageKeyPress}
              onClick={handleImageClick}
              data-value={index}
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
