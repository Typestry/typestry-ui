import classNames from "classnames"
import { PropsWithChildren } from "react"

export interface FormGroupProps extends PropsWithChildren {
  slotProps?: {
    root?: React.ComponentProps<"div">
  }
}

export function FormGroup({ slotProps, children }: FormGroupProps) {
  return (
    <div
      {...slotProps?.root}
      className={classNames("Tui-FormGroup", slotProps?.root?.className)}
    >
      {children}
    </div>
  )
}
