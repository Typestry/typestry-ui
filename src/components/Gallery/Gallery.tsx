"use client"

import { ComponentPropsWithoutRef, FC, useState } from "react"
import { ImageDialog } from "./ImageDialog/ImageDialog"
import classNames from "classnames"

export interface GalleryProps {
  images: Array<string>
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
    image?: ComponentPropsWithoutRef<"img">
  }
}

const Gallery: FC<GalleryProps> = ({ images, slotProps }) => {
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
    <div
      {...slotProps?.root}
      className={classNames(
        "columns-1 sm:columns-2 md:columns-3 gap-4",
        slotProps?.root?.className,
      )}
    >
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
            {...slotProps?.image}
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" || (e.key === " " && setImageIndex(index))
            }
            onClick={() => setImageIndex(index)}
            key={img}
            className={classNames(
              "h-auto max-w-full cursor-pointer transition ease-in-out md:hover:scale-105 duration-200",
              slotProps?.image?.className,
            )}
            src={img}
            alt=""
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
