import { ComponentPropsWithRef, ElementType } from '../react';

export type BaseInputProps<Element extends ElementType> = {
    name: string;
    "aria-label": string;
    error: boolean;
    helperText: string;
    label: string;
} & ComponentPropsWithRef<Element>;
export default BaseInputProps;
