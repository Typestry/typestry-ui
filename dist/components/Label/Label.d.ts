import { ComponentPropsWithRef } from '../../react';

export interface LabelProps extends ComponentPropsWithRef<"label"> {
    htmlFor?: string;
}
export declare const Label: import('../../react').ForwardRefExoticComponent<Omit<LabelProps, "ref"> & import('../../react').RefAttributes<HTMLLabelElement>>;
export default Label;
