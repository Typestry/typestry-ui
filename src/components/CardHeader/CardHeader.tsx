import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"
import Typography, { TypographyProps } from "@/components/Typography"

export interface CardHeaderOwnProps {
  title: string
  subtitle?: string
  slotProps?: {
    title?: TypographyProps
    subtitle?: TypographyProps
  }
}

export interface CardHeaderProps
  extends Omit<ComponentPropsWithRef<"div">, "title">,
    CardHeaderOwnProps {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader(props, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={classNames("Tui-CardHeader", props.className)}
      >
        <Typography variant="h6">{props.title}</Typography>
        {props.subtitle && (
          <Typography variant="subtitle1">{props.subtitle}</Typography>
        )}
      </div>
    )
  },
)

export default CardHeader
