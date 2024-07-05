import classNames from "classnames"
import { PropsWithChildren } from "react"

export interface FormGroupProps extends PropsWithChildren {
  slotProps?: {
    root?: React.ComponentProps<"div">
  }
}

function FormGroup({ slotProps, children }: FormGroupProps) {
  return (
    <div
      {...slotProps?.root}
      className={classNames("Tui-FormGroup", slotProps?.root?.className)}
    >
      {children}
    </div>
  )
}

export default FormGroup
