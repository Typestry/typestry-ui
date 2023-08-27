import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"

interface SocialContainerProps extends ComponentProps<"div"> {
  children: ReactNode
}

export const SocialContainer = ({
  children,
  ...rest
}: SocialContainerProps) => {
  return (
    <div {...rest} className={classNames("flex h-full", rest.className)}>
      {children}
    </div>
  )
}
