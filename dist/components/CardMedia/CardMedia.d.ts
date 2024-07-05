import { ComponentPropsWithRef } from '../../react';

export interface CardMediaProps extends ComponentPropsWithRef<"img"> {
}
export declare const CardMedia: import('../../react').ForwardRefExoticComponent<Omit<CardMediaProps, "ref"> & import('../../react').RefAttributes<HTMLImageElement>>;
export default CardMedia;
