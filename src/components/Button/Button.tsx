import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"

export interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  return <button {...props} className={classNames("button", props.className)} />
}
