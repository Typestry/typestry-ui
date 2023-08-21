import classNames from "classnames"
import { ComponentProps } from "react"

interface NavItemProps extends ComponentProps<"a"> {
  active: boolean
  name: string
  id: string
}

export const NavItem = ({
  name,
  id,
  active,
  ...rest
}: NavItemProps & { active: boolean }) => {
  return (
    <a
      key={name}
      className={classNames(
        { "border-transparent": !active },
        { "border-fuchsia-300 text-fuchsia-300": active },
        "hover:border-fuchsia-300 hover:text-fuchsia-300 border-b-2 p-2 cursor-pointer transition-colors duration-150 active:border-fuchsia-300 active:text-fuchsia-300",
      )}
      href={`#${id}`}
      {...rest}
    >
      {name}
    </a>
  )
}
