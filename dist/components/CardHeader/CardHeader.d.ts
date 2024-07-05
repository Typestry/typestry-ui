import { ComponentPropsWithRef } from '../../react';
import { TypographyProps } from '../../@/Typography';

export interface CardHeaderOwnProps {
    title: string;
    subtitle?: string;
    slotProps?: {
        title?: TypographyProps;
        subtitle?: TypographyProps;
    };
}
export interface CardHeaderProps extends Omit<ComponentPropsWithRef<"div">, "title">, CardHeaderOwnProps {
}
export declare const CardHeader: import('../../react').ForwardRefExoticComponent<Omit<CardHeaderProps, "ref"> & import('../../react').RefAttributes<HTMLDivElement>>;
export default CardHeader;
