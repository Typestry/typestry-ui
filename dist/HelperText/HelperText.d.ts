import { ComponentPropsWithRef } from 'react';

export interface HelperTextProps extends ComponentPropsWithRef<"p"> {
}
export declare const HelperText: import('react').ForwardRefExoticComponent<Omit<HelperTextProps, "ref"> & import('react').RefAttributes<HTMLParagraphElement>>;
export default HelperText;
