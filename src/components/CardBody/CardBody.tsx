import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

interface CardBodyProps extends ComponentPropsWithRef<"div"> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("card-body", props.className)}
      >
        {props.children}
      </div>
    )
  },
)

export default CardBody
