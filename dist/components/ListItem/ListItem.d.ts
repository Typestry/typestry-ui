import { ComponentPropsWithRef } from '../../react';

export interface ListItemProps extends ComponentPropsWithRef<"li"> {
}
export declare const ListItem: import('../../react').ForwardRefExoticComponent<Omit<ListItemProps, "ref"> & import('../../react').RefAttributes<HTMLLIElement>>;
export default ListItem;
