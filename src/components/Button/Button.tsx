import classNames from "classnames"
import React, { ComponentPropsWithRef, Ref, forwardRef } from "react"

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
    if (isAnchor(props)) {
      return (
        <a
          {...props}
          ref={ref as Ref<HTMLAnchorElement>}
          className={classNames("button", props.className)}
        >
          {props.children}
        </a>
      )
    } else {
      return (
        <button
          {...props}
          ref={ref as Ref<HTMLButtonElement>}
          className={classNames("button", props.className)}
        >
          {props.children}
        </button>
      )
    }
  },
) as ButtonComponent

export default Button
