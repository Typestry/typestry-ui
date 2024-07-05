import { ComponentPropsWithRef } from 'react';

interface ButtonAsAnchorProps extends ComponentPropsWithRef<"a"> {
    href: string;
}
interface ButtonAsButtonProps extends ComponentPropsWithRef<"button"> {
}
export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;
type ButtonComponent = {
    (props: ButtonAsAnchorProps): JSX.Element;
    (props: ButtonAsButtonProps): JSX.Element;
};
declare const Button: ButtonComponent;
export default Button;
