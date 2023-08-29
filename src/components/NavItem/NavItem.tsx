import { ComponentProps } from "react"

interface NavItemProps extends ComponentProps<"a"> {
  name: string
  id: string
}

export const NavItem = ({ name, id, ...rest }: NavItemProps) => {
  return (
    <a key={name} href={`#${id}`} {...rest}>
      {name}
    </a>
  )
}
