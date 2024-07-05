import { ComponentPropsWithRef } from '../../react';

export interface ListProps extends ComponentPropsWithRef<"ul"> {
}
export declare const List: import('../../react').ForwardRefExoticComponent<Omit<ListProps, "ref"> & import('../../react').RefAttributes<HTMLUListElement>>;
export default List;
