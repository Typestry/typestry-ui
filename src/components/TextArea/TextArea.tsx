import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react"

export interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
  "aria-label": string
  label: string
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
  }
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <div className="Tui-FieldGroup">
        <label htmlFor={props.name}>{props.label}</label>
        <textarea
          ref={ref}
          {...props}
          id={props.name}
          data-should-validate={Boolean(props.value)}
          className="Tui-TextArea"
        />
      </div>
    )
  },
)

export default TextArea
