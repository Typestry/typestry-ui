import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface LabelProps extends ComponentPropsWithRef<"label"> {
  htmlFor?: string
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  function Label(props) {
    return (
      <label {...props} className={classNames("TuiLabel", props.className)}>
        {props.children}
      </label>
    )
  },
) as (props: LabelProps) => JSX.Element
