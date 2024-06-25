import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface CardProps extends ComponentPropsWithRef<"div"> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("Tui-Card", props.className)}
      />
    )
  },
)

export default Card
