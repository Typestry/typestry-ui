import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"

export interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        props.className,
        "w-full hover:bg-[rgb(51,51,51,0.5)] bg-[rgb(51,51,51,0.8)] border-2 border-white transition-colors duration-300 py-3 md:py-4 mt-4 uppercase disabled:opacity-50",
      )}
    />
  )
}
