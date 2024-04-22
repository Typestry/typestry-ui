import { ComponentProps, forwardRef } from "react"

type InputProps = ComponentProps<"input">

interface TextFieldProps extends InputProps {
  name: string
  "aria-label": string
  label: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return (
      <div className="group">
        <label htmlFor={props.name} className="label">
          {props.label}
        </label>
        <input ref={ref} {...props} className="text-field" />
      </div>
    )
  },
)
