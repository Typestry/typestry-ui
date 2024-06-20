"use client"

import { FC, useState } from "react"
import useGetDownloadUrls from "@/hooks/useGetDownloadUrls"
import { ImageDialog } from "./ImageDialog/ImageDialog"

export interface GalleryProps {
  images: Array<string>
}

const Gallery: FC<GalleryProps> = ({ images: imagePaths }) => {
  const { data: images } = useGetDownloadUrls({
    paths: imagePaths,
    isEnabled: imagePaths.length > 0,
  })
  const [imageIndex, setImageIndex] = useState<number>(NaN)

  if (!images) return null

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
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      <ImageDialog
        onChange={({ reason }) =>
          reason === "next" ? handleNext() : handlePrev()
        }
        imgSrc={images[imageIndex]}
        isOpen={!Number.isNaN(imageIndex)}
        onClose={handleClose}
      />
      <div className="grid gap-4">
        {images.map((img, index) => (
          <img
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" || (e.key === " " && setImageIndex(index))
            }
            onClick={() => setImageIndex(index)}
            key={img}
            className="h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200"
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
