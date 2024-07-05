import { ComponentPropsWithRef } from 'react';
import { LabelProps } from '../Label';
import { HelperTextProps } from '../HelperText';

export interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
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
declare const TextArea: import('react').ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
