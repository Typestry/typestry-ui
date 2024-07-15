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
  subtitle1: "TuiSubtitle1",
  subtitle2: "TuiSubtitle2",
  body1: "TuiBody1",
  body2: "TuiBody2",
  caption: "TuiCaption",
  overline: "TuiOverline",
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
      { ...props, className: classNames("TuiTypography", props.className) },
      children,
    ) as JSX.Element
  } else {
    return createElement(
      "p",
      {
        ...props,
        className: classNames(
          TypographyClasses[variant],
          "TuiTypography",
          props.className,
        ),
      },
      children,
    ) as JSX.Element
  }
}
