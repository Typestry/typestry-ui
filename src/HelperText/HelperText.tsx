import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface HelperTextProps extends ComponentPropsWithRef<"p"> {}

export const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  (props, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={classNames("Tui-HelperText", props.className)}
      />
    )
  },
) as (props: HelperTextProps) => JSX.Element
