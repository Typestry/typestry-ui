import { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

export interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
    "aria-label": string;
    label: string;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
    };
}
declare const TextArea: import('react').ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
