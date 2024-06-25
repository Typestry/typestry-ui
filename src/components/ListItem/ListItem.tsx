import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface ListItemProps extends ComponentPropsWithRef<"li"> {}

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem(props, ref) {
    return (
      <li
        ref={ref}
        {...props}
        className={classNames("Tui-ListItem", props.className)}
      />
    )
  },
)

export default ListItem
