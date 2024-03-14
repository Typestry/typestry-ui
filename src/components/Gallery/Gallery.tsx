import { FC } from "react"

interface GalleryProps {
  images: string[]
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <img className="h-auto max-w-full rounded-lg" src={img} alt="" />
      ))}
    </div>
  )
}
