import classNames from "classnames"
import { ComponentPropsWithRef, createElement, forwardRef } from "react"

interface ButtonAsAnchorProps extends ComponentPropsWithRef<"a"> {
  href: string
}

interface ButtonAsButtonProps extends ComponentPropsWithRef<"button"> {}

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps

const isAnchor = (props: ButtonProps): props is ButtonAsAnchorProps =>
  "href" in props

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const className = classNames("TuiButton", props.className)

  if (isAnchor(props)) {
    return createElement("a", { ...props, ref, className }, props.children)
  } else {
    return createElement("button", { ...props, ref, className }, props.children)
  }
}) as {
  (props: ButtonAsAnchorProps): JSX.Element
  (props: ButtonAsButtonProps): JSX.Element
}
