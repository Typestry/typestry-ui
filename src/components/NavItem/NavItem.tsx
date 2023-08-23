import classNames from "classnames"
import { ComponentProps } from "react"

interface NavItemProps extends ComponentProps<"a"> {
  name: string
  id: string
  active: boolean
}

export const NavItem = ({ name, id, active, ...rest }: NavItemProps) => {
  return (
    <a
      key={name}
      className={classNames(
        {
          "border-fuchsia-300 text-fuchsia-300 border-b-2": active,
        },
        "hover:border-fuchsia-300 hover:text-fuchsia-300 hover:border-b-2 p-2 cursor-pointer transition-colors duration-150",
      )}
      href={`#${id}`}
      {...rest}
    >
      {name}
    </a>
  )
}
