import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface LabelProps extends ComponentPropsWithRef<"label"> {
  id: string
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  function Label(props) {
    return (
      <label
        htmlFor={props.id}
        className={classNames("Tui-Label", props.className)}
      >
        {props.children}
      </label>
    )
  },
)

export default Label
