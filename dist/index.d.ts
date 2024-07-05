import { AnimationEventHandler } from 'react';
import { AriaRole } from 'react';
import { BaseSyntheticEvent } from 'react';
import { ClipboardEventHandler } from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { ComponentPropsWithRef } from 'react';
import { CompositionEventHandler } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { CSSProperties } from 'react';
import { DetailedReactHTMLElement } from 'react';
import { DragEventHandler } from 'react';
import { FC } from 'react';
import { FieldValues } from 'react-hook-form';
import { FocusEventHandler } from 'react';
import { FormEventHandler } from 'react';
import { JSX as JSX_2 } from 'react';
import { Key } from 'react';
import { KeyboardEventHandler } from 'react';
import { MouseEventHandler } from 'react';
import { PointerEventHandler } from 'react';
import { ReactEventHandler } from 'react';
import { RefObject } from 'react';
import { TouchEventHandler } from 'react';
import { TransitionEventHandler } from 'react';
import { UIEventHandler } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { WheelEventHandler } from 'react';

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

declare interface CardBodyProps extends ComponentPropsWithRef<"div"> {
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

export declare const Typography: ({ children, variant, ...props }: TypographyProps) => DetailedReactHTMLElement<    {
className: string;
slot?: string | undefined;
style?: CSSProperties | undefined;
title?: string | undefined;
key?: Key | null | undefined;
defaultChecked?: boolean | undefined;
defaultValue?: string | number | readonly string[] | undefined;
suppressContentEditableWarning?: boolean | undefined;
suppressHydrationWarning?: boolean | undefined;
accessKey?: string | undefined;
autoFocus?: boolean | undefined;
contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
contextMenu?: string | undefined;
dir?: string | undefined;
draggable?: (boolean | "true" | "false") | undefined;
hidden?: boolean | undefined;
id?: string | undefined;
lang?: string | undefined;
nonce?: string | undefined;
placeholder?: string | undefined;
spellCheck?: (boolean | "true" | "false") | undefined;
tabIndex?: number | undefined;
translate?: "yes" | "no" | undefined;
radioGroup?: string | undefined;
role?: AriaRole | undefined;
about?: string | undefined;
content?: string | undefined;
datatype?: string | undefined;
inlist?: any;
prefix?: string | undefined;
property?: string | undefined;
rel?: string | undefined;
resource?: string | undefined;
rev?: string | undefined;
typeof?: string | undefined;
vocab?: string | undefined;
autoCapitalize?: string | undefined;
autoCorrect?: string | undefined;
autoSave?: string | undefined;
color?: string | undefined;
itemProp?: string | undefined;
itemScope?: boolean | undefined;
itemType?: string | undefined;
itemID?: string | undefined;
itemRef?: string | undefined;
results?: number | undefined;
security?: string | undefined;
unselectable?: "on" | "off" | undefined;
inputMode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
is?: string | undefined;
'aria-activedescendant'?: string | undefined;
'aria-atomic'?: (boolean | "true" | "false") | undefined;
'aria-autocomplete'?: "list" | "none" | "inline" | "both" | undefined;
'aria-braillelabel'?: string | undefined;
'aria-brailleroledescription'?: string | undefined;
'aria-busy'?: (boolean | "true" | "false") | undefined;
'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
'aria-colcount'?: number | undefined;
'aria-colindex'?: number | undefined;
'aria-colindextext'?: string | undefined;
'aria-colspan'?: number | undefined;
'aria-controls'?: string | undefined;
'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
'aria-describedby'?: string | undefined;
'aria-description'?: string | undefined;
'aria-details'?: string | undefined;
'aria-disabled'?: (boolean | "true" | "false") | undefined;
'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
'aria-errormessage'?: string | undefined;
'aria-expanded'?: (boolean | "true" | "false") | undefined;
'aria-flowto'?: string | undefined;
'aria-grabbed'?: (boolean | "true" | "false") | undefined;
'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
'aria-hidden'?: (boolean | "true" | "false") | undefined;
'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
'aria-keyshortcuts'?: string | undefined;
'aria-label'?: string | undefined;
'aria-labelledby'?: string | undefined;
'aria-level'?: number | undefined;
'aria-live'?: "off" | "assertive" | "polite" | undefined;
'aria-modal'?: (boolean | "true" | "false") | undefined;
'aria-multiline'?: (boolean | "true" | "false") | undefined;
'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
'aria-orientation'?: "horizontal" | "vertical" | undefined;
'aria-owns'?: string | undefined;
'aria-placeholder'?: string | undefined;
'aria-posinset'?: number | undefined;
'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
'aria-readonly'?: (boolean | "true" | "false") | undefined;
'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
'aria-required'?: (boolean | "true" | "false") | undefined;
'aria-roledescription'?: string | undefined;
'aria-rowcount'?: number | undefined;
'aria-rowindex'?: number | undefined;
'aria-rowindextext'?: string | undefined;
'aria-rowspan'?: number | undefined;
'aria-selected'?: (boolean | "true" | "false") | undefined;
'aria-setsize'?: number | undefined;
'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
'aria-valuemax'?: number | undefined;
'aria-valuemin'?: number | undefined;
'aria-valuenow'?: number | undefined;
'aria-valuetext'?: string | undefined;
dangerouslySetInnerHTML?: {
__html: string | TrustedHTML;
} | undefined;
onCopy?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onCopyCapture?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onCut?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onCutCapture?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onPaste?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onPasteCapture?: ClipboardEventHandler<HTMLParagraphElement> | undefined;
onCompositionEnd?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onCompositionEndCapture?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onCompositionStart?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onCompositionStartCapture?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onCompositionUpdate?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onCompositionUpdateCapture?: CompositionEventHandler<HTMLParagraphElement> | undefined;
onFocus?: FocusEventHandler<HTMLParagraphElement> | undefined;
onFocusCapture?: FocusEventHandler<HTMLParagraphElement> | undefined;
onBlur?: FocusEventHandler<HTMLParagraphElement> | undefined;
onBlurCapture?: FocusEventHandler<HTMLParagraphElement> | undefined;
onChange?: FormEventHandler<HTMLParagraphElement> | undefined;
onChangeCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onBeforeInput?: FormEventHandler<HTMLParagraphElement> | undefined;
onBeforeInputCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onInput?: FormEventHandler<HTMLParagraphElement> | undefined;
onInputCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onReset?: FormEventHandler<HTMLParagraphElement> | undefined;
onResetCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onSubmit?: FormEventHandler<HTMLParagraphElement> | undefined;
onSubmitCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onInvalid?: FormEventHandler<HTMLParagraphElement> | undefined;
onInvalidCapture?: FormEventHandler<HTMLParagraphElement> | undefined;
onLoad?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onError?: ReactEventHandler<HTMLParagraphElement> | undefined;
onErrorCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onKeyDown?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onKeyDownCapture?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onKeyPress?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onKeyPressCapture?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onKeyUp?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onKeyUpCapture?: KeyboardEventHandler<HTMLParagraphElement> | undefined;
onAbort?: ReactEventHandler<HTMLParagraphElement> | undefined;
onAbortCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onCanPlay?: ReactEventHandler<HTMLParagraphElement> | undefined;
onCanPlayCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onCanPlayThrough?: ReactEventHandler<HTMLParagraphElement> | undefined;
onCanPlayThroughCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onDurationChange?: ReactEventHandler<HTMLParagraphElement> | undefined;
onDurationChangeCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEmptied?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEmptiedCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEncrypted?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEncryptedCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEnded?: ReactEventHandler<HTMLParagraphElement> | undefined;
onEndedCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadedData?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadedDataCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadedMetadata?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadedMetadataCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadStart?: ReactEventHandler<HTMLParagraphElement> | undefined;
onLoadStartCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPause?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPauseCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPlay?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPlayCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPlaying?: ReactEventHandler<HTMLParagraphElement> | undefined;
onPlayingCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onProgress?: ReactEventHandler<HTMLParagraphElement> | undefined;
onProgressCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onRateChange?: ReactEventHandler<HTMLParagraphElement> | undefined;
onRateChangeCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onResize?: ReactEventHandler<HTMLParagraphElement> | undefined;
onResizeCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSeeked?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSeekedCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSeeking?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSeekingCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onStalled?: ReactEventHandler<HTMLParagraphElement> | undefined;
onStalledCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSuspend?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSuspendCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onTimeUpdate?: ReactEventHandler<HTMLParagraphElement> | undefined;
onTimeUpdateCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onVolumeChange?: ReactEventHandler<HTMLParagraphElement> | undefined;
onVolumeChangeCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onWaiting?: ReactEventHandler<HTMLParagraphElement> | undefined;
onWaitingCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onAuxClick?: MouseEventHandler<HTMLParagraphElement> | undefined;
onAuxClickCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onClick?: MouseEventHandler<HTMLParagraphElement> | undefined;
onClickCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onContextMenu?: MouseEventHandler<HTMLParagraphElement> | undefined;
onContextMenuCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onDoubleClick?: MouseEventHandler<HTMLParagraphElement> | undefined;
onDoubleClickCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onDrag?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragEnd?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragEndCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragEnter?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragEnterCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragExit?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragExitCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragLeave?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragLeaveCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragOver?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragOverCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragStart?: DragEventHandler<HTMLParagraphElement> | undefined;
onDragStartCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onDrop?: DragEventHandler<HTMLParagraphElement> | undefined;
onDropCapture?: DragEventHandler<HTMLParagraphElement> | undefined;
onMouseDown?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseDownCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseEnter?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseLeave?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseMove?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseMoveCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseOut?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseOutCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseOver?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseOverCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseUp?: MouseEventHandler<HTMLParagraphElement> | undefined;
onMouseUpCapture?: MouseEventHandler<HTMLParagraphElement> | undefined;
onSelect?: ReactEventHandler<HTMLParagraphElement> | undefined;
onSelectCapture?: ReactEventHandler<HTMLParagraphElement> | undefined;
onTouchCancel?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchCancelCapture?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchEnd?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchEndCapture?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchMove?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchMoveCapture?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchStart?: TouchEventHandler<HTMLParagraphElement> | undefined;
onTouchStartCapture?: TouchEventHandler<HTMLParagraphElement> | undefined;
onPointerDown?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerDownCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerMove?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerMoveCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerUp?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerUpCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerCancel?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerCancelCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerEnter?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerEnterCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerLeave?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerLeaveCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerOver?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerOverCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerOut?: PointerEventHandler<HTMLParagraphElement> | undefined;
onPointerOutCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onGotPointerCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onGotPointerCaptureCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onLostPointerCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onLostPointerCaptureCapture?: PointerEventHandler<HTMLParagraphElement> | undefined;
onScroll?: UIEventHandler<HTMLParagraphElement> | undefined;
onScrollCapture?: UIEventHandler<HTMLParagraphElement> | undefined;
onWheel?: WheelEventHandler<HTMLParagraphElement> | undefined;
onWheelCapture?: WheelEventHandler<HTMLParagraphElement> | undefined;
onAnimationStart?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onAnimationStartCapture?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onAnimationEnd?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onAnimationEndCapture?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onAnimationIteration?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onAnimationIterationCapture?: AnimationEventHandler<HTMLParagraphElement> | undefined;
onTransitionEnd?: TransitionEventHandler<HTMLParagraphElement> | undefined;
onTransitionEndCapture?: TransitionEventHandler<HTMLParagraphElement> | undefined;
}, HTMLElement>;

export declare const TypographyClasses: {
    readonly subtitle1: "Tui-Subtitle1";
    readonly subtitle2: "Tui-Subtitle2";
    readonly body1: "Tui-Body1";
    readonly body2: "Tui-Body2";
    readonly caption: "Tui-Caption";
    readonly overline: "Tui-Overline";
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
