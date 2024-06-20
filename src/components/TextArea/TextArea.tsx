import { ComponentProps, forwardRef } from "react"

export interface TextAreaProps extends ComponentProps<"textarea"> {
  "aria-label": string
  label: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <div className="group">
        <label htmlFor={props.name}>{props.label}</label>
        <textarea
          ref={ref}
          {...props}
          id={props.name}
          data-should-validate={Boolean(props.value)}
          className="text-area"
        />
      </div>
    )
  },
)

export default TextArea
