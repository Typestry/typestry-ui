import classNames from "classnames"
import { ComponentPropsWithRef, forwardRef } from "react"

export interface ListProps extends ComponentPropsWithRef<"ul"> {}

export const List = forwardRef<HTMLUListElement, ListProps>(
  function List(props, ref) {
    return (
      <ul
        ref={ref}
        {...props}
        className={classNames("list", props.className)}
      />
    )
  },
)

export default List
