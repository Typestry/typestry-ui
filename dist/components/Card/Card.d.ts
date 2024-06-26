import { ComponentPropsWithRef } from 'react';

export interface CardProps extends ComponentPropsWithRef<"div"> {
}
export declare const Card: import('react').ForwardRefExoticComponent<Omit<CardProps, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
export default Card;
