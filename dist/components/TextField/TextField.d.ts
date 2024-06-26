import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
    name: string;
    "aria-label": string;
    label: string;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
    };
}
declare const TextField: import('react').ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export default TextField;
