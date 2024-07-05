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

const isSemanticTag = (tag: string): tag is SemanticTag => {
  return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)
}

export const TypographyClasses = {
  subtitle1: "Tui-Subtitle1",
  subtitle2: "Tui-Subtitle2",
  body1: "Tui-Body1",
  body2: "Tui-Body2",
  caption: "Tui-Caption",
  overline: "Tui-Overline",
} as const

export interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
  variant?: SemanticTag | TypographyVariant
}

export const Typography = ({
  children,
  variant = "body1",
  ...props
}: TypographyProps) => {
  if (isSemanticTag(variant)) {
    return createElement(
      variant,
      { ...props, className: classNames(props.className, "Tui-Typography") },
      children,
    )
  } else {
    return createElement(
      "p",
      {
        ...props,
        className: classNames(
          TypographyClasses[variant],
          props.className,
          "Tui-Typography",
        ),
      },
      children,
    )
  }
}
