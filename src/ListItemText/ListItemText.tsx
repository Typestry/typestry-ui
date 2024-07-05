import { ComponentPropsWithoutRef } from "react"
import Typography, { TypographyProps } from "@/Typography"
import classNames from "classnames"

export interface ListTypographyProps {
  variant?: TypographyProps["variant"]
  children: React.ReactNode
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
    typography?: Omit<TypographyProps, "children">
  }
}

export const ListItemText = ({
  variant = "body1",
  children,
  slotProps,
}: ListTypographyProps) => {
  return (
    <div
      {...slotProps?.root}
      className={classNames("Tui-ListItemText", slotProps?.root?.className)}
    >
      <Typography variant={variant} {...slotProps?.typography}>
        {children}
      </Typography>
    </div>
  )
}

export default ListItemText
