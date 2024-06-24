import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface CardContentProps extends ComponentPropsWithRef<"div"> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("card-content", props.className)}
      />
    )
  },
)

export default CardContent
