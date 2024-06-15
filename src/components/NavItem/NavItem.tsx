import { ComponentProps } from "react"

export interface NavItemProps extends ComponentProps<"a"> {
  name: string
  id: string
}

const NavItem = ({ name, id, ...rest }: NavItemProps) => {
  return (
    <a key={name} href={`#${id}`} {...rest}>
      {name}
    </a>
  )
}

export default NavItem
