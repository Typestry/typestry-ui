import { ComponentPropsWithoutRef } from 'react';
import { TypographyProps } from '../Typography';

export interface ListTypographyProps {
    variant?: TypographyProps["variant"];
    children: React.ReactNode;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
        typography?: Omit<TypographyProps, "children">;
    };
}
export declare const ListItemText: ({ variant, children, slotProps, }: ListTypographyProps) => import("react").JSX.Element;
export default ListItemText;
