import { useDisclosure } from "@/hooks/useDisclosure"
import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"
import { ImageDialog } from "@/ImageDialog"

export interface CardMediaProps extends ComponentPropsWithRef<"img"> {}

export const CardMedia = forwardRef<HTMLImageElement, CardMediaProps>(
  function CardMedia(props, ref) {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
      <>
        <ImageDialog
          imgSrc={props.src ?? ""}
          isOpen={isOpen}
          onClose={onClose}
        />
        <img
          {...props}
          onClick={onOpen}
          ref={ref}
          className={classNames("TuiCardMedia", props.className)}
        />
      </>
    )
  },
) as (props: CardMediaProps) => JSX.Element
