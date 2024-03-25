import { FC, useEffect, useRef } from "react"
import { useKeyPress } from "../../../hooks/useKeyPress"
import { createPortal } from "react-dom"
import { ChevronLeft, ChevronRight, X } from "react-feather"

interface ImageDialogProps {
  imgSrc: string
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export const ImageDialog: FC<ImageDialogProps> = ({
  imgSrc,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const modalRef = useRef<HTMLImageElement>(null)

  useKeyPress(["Escape"], onClose)
  useKeyPress(["ArrowRight"], onNext)
  useKeyPress(["ArrowLeft"], onPrev)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm md:p-8">
      <ChevronLeft
        aria-label="Previous"
        onClick={onPrev}
        strokeWidth={1}
        className="hidden md:block self-center cursor-pointer md:h-24 md:w-24"
      />
      <div className="flex justify-center">
        <div
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
          }}
          className="absolute right-4 top-4 cursor-pointer z-50 flex items-center gap-2 md:gap-4"
        >
          <X className="w-6 h-6" />
          <p className="uppercase">Close</p>
        </div>
        <img
          ref={modalRef}
          src={imgSrc}
          alt=""
          className="object-contain m-auto md:h-full md:object-cover object-center"
        />
      </div>
      <ChevronRight
        aria-label="Next"
        onClick={onNext}
        strokeWidth={1}
        className="hidden md:block self-center cursor-pointer md:h-24 md:w-24"
      />
    </div>,
    document.body,
  )
}
