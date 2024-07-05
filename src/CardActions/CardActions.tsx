import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface CardActionsProps extends ComponentPropsWithRef<"div"> {}

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  function CardActions(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("Tui-CardActionArea", props.className)}
      >
        {props.children}
      </div>
    )
  },
) as (props: CardActionsProps) => JSX.Element
