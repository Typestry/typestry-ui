import { BaseSyntheticEvent } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { ComponentPropsWithRef } from 'react';
import { Config } from 'tailwindcss/types/config';
import { ControllerRenderProps } from 'react-hook-form';
import { CSSProperties } from 'react';
import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { JSX as JSX_2 } from 'react';
import { PluginCreator } from 'tailwindcss/types/config';
import { PropsWithChildren } from 'react';
import { RefObject } from 'react';
import { UseFormRegister } from 'react-hook-form';

export declare const Button: {
    (props: ButtonAsAnchorProps): JSX.Element;
    (props: ButtonAsButtonProps): JSX.Element;
};

declare interface ButtonAsAnchorProps extends ComponentPropsWithRef<"a"> {
    href: string;
}

declare interface ButtonAsButtonProps extends ComponentPropsWithRef<"button"> {
}

export declare type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export declare const Card: (props: CardProps) => JSX.Element;

export declare const CardActions: (props: CardActionsProps) => JSX.Element;

export declare interface CardActionsProps extends ComponentPropsWithRef<"div"> {
}

export declare const CardBody: (props: CardBodyProps) => JSX.Element;

export declare interface CardBodyProps extends ComponentPropsWithRef<"div"> {
}

export declare const CardContent: (props: CardContentProps) => JSX.Element;

export declare interface CardContentProps extends ComponentPropsWithRef<"div"> {
}

export declare const CardHeader: (props: CardHeaderProps) => JSX.Element;

export declare interface CardHeaderOwnProps {
    title: string;
    subtitle?: string;
    slotProps?: {
        title?: TypographyProps;
        subtitle?: TypographyProps;
    };
}

export declare interface CardHeaderProps extends Omit<ComponentPropsWithRef<"div">, "title">, CardHeaderOwnProps {
}

export declare const CardMedia: (props: CardMediaProps) => JSX.Element;

export declare interface CardMediaProps extends ComponentPropsWithRef<"img"> {
}

export declare interface CardProps extends ComponentPropsWithRef<"div"> {
}

declare type ChangeReason = "next" | "prev";

/**
 * useOutsideClick
 * @param ref - Reference of the element
 * @param handler - Callback function to be executed when the event occurs
 */
export declare type ClickEvent = MouseEvent | TouchEvent;

declare interface FormGroupProps extends PropsWithChildren {
    slotProps?: {
        root?: React.ComponentProps<"div">;
    };
}

export declare const Gallery: FC<GalleryProps>;

export declare interface GalleryProps {
    images: Array<string>;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
        image?: ComponentPropsWithoutRef<"img">;
    };
}

export declare const HelperText: (props: HelperTextProps) => JSX.Element;

export declare interface HelperTextProps extends ComponentPropsWithRef<"p"> {
}

export declare const ImageDialog: FC<ImageDialogProps>;

export declare interface ImageDialogProps {
    imgSrc: string;
    isOpen: boolean;
    onClose: () => void;
    onChange?: ({ reason }: {
        reason: ChangeReason;
    }) => void;
}

declare interface LabelProps extends ComponentPropsWithRef<"label"> {
    htmlFor?: string;
}

export declare const List: (props: ListProps) => JSX.Element;

export declare const ListItem: (props: ListItemProps) => JSX.Element;

export declare interface ListItemProps extends ComponentPropsWithRef<"li"> {
}

export declare const ListItemText: ({ variant, children, slotProps, }: ListTypographyProps) => JSX_2.Element;

export declare interface ListProps extends ComponentPropsWithRef<"ul"> {
}

export declare interface ListTypographyProps {
    variant?: TypographyProps["variant"];
    children: React.ReactNode;
    slotProps?: {
        root?: ComponentPropsWithoutRef<"div">;
        typography?: Omit<TypographyProps, "children">;
    };
}

declare type SemanticTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export declare const TextArea: (props: TextAreaProps) => JSX.Element;

export declare interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
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

export declare const TextField: (props: TextFieldProps) => JSX.Element;

export declare interface TextFieldProps extends ComponentPropsWithRef<"input"> {
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

export declare function typestry(config?: TypestryConfig): {
    handler: PluginCreator;
    config?: Partial<Config>;
};

export declare type TypestryClasses = `.${keyof TypestryComponents}`;

declare interface TypestryComponents {
    TuiButton: ButtonProps;
    TuiCard: CardProps;
    TuiCardActions: CardActionsProps;
    TuiCardBody: CardBodyProps;
    TuiCardContent: CardContentProps;
    TuiCardHeader: CardHeaderProps;
    TuiCardMedia: CardMediaProps;
    TuiFormGroup: FormGroupProps;
    TuiGallery: GalleryProps;
    TuiHelperText: HelperTextProps;
    TuiImageDialog: ImageDialogProps;
    TuiLabel: LabelProps;
    TuiList: ListProps;
    TuiListItem: ListItemProps;
    TuiTextArea: TextAreaProps;
    TuiTextField: TextFieldProps;
    TuiTypography: TypographyProps;
}

declare interface TypestryConfig {
    overrides?: Partial<Record<TypestryClasses, CSSProperties>>;
}

export declare const Typography: ({ children, variant, ...props }: TypographyProps) => JSX.Element;

export declare const TypographyClasses: {
    readonly subtitle1: "TuiSubtitle1";
    readonly subtitle2: "TuiSubtitle2";
    readonly body1: "TuiBody1";
    readonly body2: "TuiBody2";
    readonly caption: "TuiCaption";
    readonly overline: "TuiOverline";
};

export declare interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
    variant?: SemanticTag | TypographyVariant;
}

declare type TypographyVariant = "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";

export declare const useDisclosure: () => {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export declare const useEventListener: (ref: Element | Document | Window | null | undefined, type: string, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions) => void;

export declare const useField: (name: string) => ControllerRenderProps<FieldValues, string>;

export declare const useForm: <Values extends FieldValues>({ onSubmit, }: UseFormArgs<Values>) => UseFormReturn<Values>;

export declare interface UseFormArgs<Values> {
    onSubmit: (values: Values) => Promise<void>;
}

export declare interface UseFormReturn<Values extends FieldValues> {
    isSubmitting: boolean;
    handleSubmit: (e: BaseSyntheticEvent) => void;
    isError: boolean;
    register: UseFormRegister<Values>;
}

export declare const useIntersectionObserver: ({ callback, config, observables, ...deps }: UseIntersectionObserverProps) => void;

export declare interface UseIntersectionObserverProps {
    callback: IntersectionObserverCallback;
    observables: Array<Element>;
    config?: IntersectionObserverInit;
    deps?: Array<unknown>;
}

export declare const useIsDesktop: () => boolean;

/**
 * useKeyPress
 * @param keyCodes - Array of key codes to listen for
 * @param handler - Callback function to be executed when the event occurs
 */
export declare function useKeyPress(keyCodes: string[], handler: (event: KeyboardEvent) => void): void;

export declare function useOutsideClick<T extends HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void): void;

export { }
