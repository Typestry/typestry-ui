import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface CardBodyProps extends ComponentPropsWithRef<"div"> {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  function CardBody(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("TuiCardBody", props.className)}
      >
        {props.children}
      </div>
    )
  },
) as (props: CardBodyProps) => JSX.Element
