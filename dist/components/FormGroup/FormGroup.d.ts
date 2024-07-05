import { PropsWithChildren } from '../../react';

export interface FormGroupProps extends PropsWithChildren {
    slotProps?: {
        root?: React.ComponentProps<"div">;
    };
}
declare function FormGroup({ slotProps, children }: FormGroupProps): import("react").JSX.Element;
export default FormGroup;
