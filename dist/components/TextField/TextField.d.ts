import { ComponentPropsWithRef } from 'react';
import { LabelProps } from '../Label';
import { HelperTextProps } from '../HelperText';

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
    name: string;
    helperText?: string;
    error?: boolean;
    label?: string;
    slotProps?: {
        root?: React.ComponentProps<"div">;
        label?: LabelProps;
        helperText?: HelperTextProps;
    };
}
declare const TextField: import('react').ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export default TextField;
