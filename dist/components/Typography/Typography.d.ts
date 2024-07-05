import { ComponentPropsWithoutRef } from '../../react';

type SemanticTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TypographyVariant = "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline";
export declare const TypographyClasses: {
    readonly subtitle1: "Tui-Subtitle1";
    readonly subtitle2: "Tui-Subtitle2";
    readonly body1: "Tui-Body1";
    readonly body2: "Tui-Body2";
    readonly caption: "Tui-Caption";
    readonly overline: "Tui-Overline";
};
export interface TypographyProps extends ComponentPropsWithoutRef<"p"> {
    variant?: SemanticTag | TypographyVariant;
}
export declare const Typography: ({ children, variant, ...props }: TypographyProps) => import('../../react').DetailedReactHTMLElement<{
    className: string;
    slot?: string | undefined;
    style?: import('../../react').CSSProperties | undefined;
    title?: string | undefined;
    key?: import('../../react').Key | null | undefined;
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
    role?: import('../../react').AriaRole | undefined;
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
    onCopy?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onCopyCapture?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onCut?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onCutCapture?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onPaste?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onPasteCapture?: import('../../react').ClipboardEventHandler<HTMLParagraphElement> | undefined;
    onCompositionEnd?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onCompositionEndCapture?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onCompositionStart?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onCompositionStartCapture?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onCompositionUpdate?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onCompositionUpdateCapture?: import('../../react').CompositionEventHandler<HTMLParagraphElement> | undefined;
    onFocus?: import('../../react').FocusEventHandler<HTMLParagraphElement> | undefined;
    onFocusCapture?: import('../../react').FocusEventHandler<HTMLParagraphElement> | undefined;
    onBlur?: import('../../react').FocusEventHandler<HTMLParagraphElement> | undefined;
    onBlurCapture?: import('../../react').FocusEventHandler<HTMLParagraphElement> | undefined;
    onChange?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onChangeCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onBeforeInput?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onBeforeInputCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onInput?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onInputCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onReset?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onResetCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onSubmit?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onSubmitCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onInvalid?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onInvalidCapture?: import('../../react').FormEventHandler<HTMLParagraphElement> | undefined;
    onLoad?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onError?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onErrorCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onKeyDown?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onKeyDownCapture?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onKeyPress?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onKeyPressCapture?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onKeyUp?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onKeyUpCapture?: import('../../react').KeyboardEventHandler<HTMLParagraphElement> | undefined;
    onAbort?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onAbortCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onCanPlay?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onCanPlayCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onCanPlayThrough?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onCanPlayThroughCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onDurationChange?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onDurationChangeCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEmptied?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEmptiedCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEncrypted?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEncryptedCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEnded?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onEndedCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadedData?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadedDataCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadedMetadata?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadedMetadataCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadStart?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onLoadStartCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPause?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPauseCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPlay?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPlayCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPlaying?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onPlayingCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onProgress?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onProgressCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onRateChange?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onRateChangeCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onResize?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onResizeCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSeeked?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSeekedCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSeeking?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSeekingCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onStalled?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onStalledCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSuspend?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSuspendCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onTimeUpdate?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onTimeUpdateCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onVolumeChange?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onVolumeChangeCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onWaiting?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onWaitingCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onAuxClick?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onAuxClickCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onClick?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onClickCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onContextMenu?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onContextMenuCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onDoubleClick?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onDoubleClickCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onDrag?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragEnd?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragEndCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragEnter?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragEnterCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragExit?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragExitCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragLeave?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragLeaveCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragOver?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragOverCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragStart?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDragStartCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDrop?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onDropCapture?: import('../../react').DragEventHandler<HTMLParagraphElement> | undefined;
    onMouseDown?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseDownCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseEnter?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseLeave?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseMove?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseMoveCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseOut?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseOutCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseOver?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseOverCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseUp?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onMouseUpCapture?: import('../../react').MouseEventHandler<HTMLParagraphElement> | undefined;
    onSelect?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onSelectCapture?: import('../../react').ReactEventHandler<HTMLParagraphElement> | undefined;
    onTouchCancel?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchCancelCapture?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchEnd?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchEndCapture?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchMove?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchMoveCapture?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchStart?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onTouchStartCapture?: import('../../react').TouchEventHandler<HTMLParagraphElement> | undefined;
    onPointerDown?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerDownCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerMove?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerMoveCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerUp?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerUpCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerCancel?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerCancelCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerEnter?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerEnterCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerLeave?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerLeaveCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerOver?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerOverCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerOut?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onPointerOutCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onGotPointerCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onGotPointerCaptureCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onLostPointerCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onLostPointerCaptureCapture?: import('../../react').PointerEventHandler<HTMLParagraphElement> | undefined;
    onScroll?: import('../../react').UIEventHandler<HTMLParagraphElement> | undefined;
    onScrollCapture?: import('../../react').UIEventHandler<HTMLParagraphElement> | undefined;
    onWheel?: import('../../react').WheelEventHandler<HTMLParagraphElement> | undefined;
    onWheelCapture?: import('../../react').WheelEventHandler<HTMLParagraphElement> | undefined;
    onAnimationStart?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onAnimationStartCapture?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onAnimationEnd?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onAnimationEndCapture?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onAnimationIteration?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onAnimationIterationCapture?: import('../../react').AnimationEventHandler<HTMLParagraphElement> | undefined;
    onTransitionEnd?: import('../../react').TransitionEventHandler<HTMLParagraphElement> | undefined;
    onTransitionEndCapture?: import('../../react').TransitionEventHandler<HTMLParagraphElement> | undefined;
}, HTMLElement>;
export default Typography;
