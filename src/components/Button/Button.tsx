import classNames from "classnames"
import { ComponentPropsWithRef, createElement, forwardRef } from "react"

interface ButtonAsAnchorProps extends ComponentPropsWithRef<"a"> {
  href: string
}

interface ButtonAsButtonProps extends ComponentPropsWithRef<"button"> {}

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps

type ButtonComponent = {
  (props: ButtonAsAnchorProps): JSX.Element
  (props: ButtonAsButtonProps): JSX.Element
}

const isAnchor = (props: ButtonProps): props is ButtonAsAnchorProps =>
  "href" in props

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const className = classNames("button", props.className)

    if (isAnchor(props)) {
      return createElement("a", { ...props, ref, className }, props.children)
    } else {
      return createElement(
        "button",
        { ...props, ref, className },
        props.children,
      )
    }
  },
) as ButtonComponent

export default Button
