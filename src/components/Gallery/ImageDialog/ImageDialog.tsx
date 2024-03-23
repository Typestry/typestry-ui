import { FC, useEffect, useRef } from "react"
import { useOutsideClick } from "../../../hooks/useOutsideClick"
import { useKeyPress } from "../../../hooks/useKeyPress"
import { createPortal } from "react-dom"
import { X } from "react-feather"

interface ImageDialogProps {
  imgSrc: string
  isOpen: boolean
  onClose: () => void
}

export const ImageDialog: FC<ImageDialogProps> = ({
  imgSrc,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLImageElement>(null)

  const handleClose = (e: Event) => {
    e.stopPropagation()
    onClose()
  }

  useOutsideClick(modalRef, handleClose)

  useKeyPress(["Escape"], handleClose)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm p-2 md:p-8">
      <div className="flex justify-center relative">
        <X
          className="absolute right-0 w-6 h-6 md:h-12 md:w-12"
          strokeWidth={1}
        />
        <img
          ref={modalRef}
          src={imgSrc}
          alt=""
          className="object-contain m-auto md:h-full md:object-cover object-center rounded-lg"
        />
      </div>
    </div>,
    document.body,
  )
}
