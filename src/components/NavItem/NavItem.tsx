import { ComponentProps } from "react"
import { useBandPageContext } from "../../providers/BandPageProvider"

interface NavItemProps extends ComponentProps<"a"> {
  name: string
  id: string
  active: boolean
}

export const NavItem = ({ name, id, active, ...rest }: NavItemProps) => {
  const {
    bandPageConfig: { theme },
  } = useBandPageContext()
  return (
    <a
      key={name}
      className={theme?.linkClassName?.(active)}
      href={`#${id}`}
      {...rest}
    >
      {name}
    </a>
  )
}
