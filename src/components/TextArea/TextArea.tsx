import { ComponentProps, forwardRef } from "react"

type InputProps = ComponentProps<"textarea">

interface TextAreaProps extends InputProps {
  "aria-label": string
  label: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
