import classNames from "classnames"
import { ComponentPropsWithoutRef, createElement } from "react"

type SemanticTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type TypographyVariant =
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"

const isSemanticElement = (tag: string): tag is SemanticTag => {
  return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)
}

export interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
  variant: SemanticTag | TypographyVariant
}

export const Typography = ({ children, ...props }: TypographyProps) => {
  const { variant } = props

  if (isSemanticElement(variant)) {
    return createElement(variant, props, children)
  } else {
    return createElement(
      "p",
      { ...props, className: classNames(props.variant, props.className) },
      children,
    )
  }
}

export default Typography
