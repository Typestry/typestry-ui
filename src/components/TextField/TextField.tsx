import { ComponentProps } from "react"

type InputProps = ComponentProps<"input">

interface TextFieldProps extends InputProps {
  "aria-label": string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="group">
      <label htmlFor={props.name} className="label">
        {props.label}
      </label>
      <input
        {...props}
        id={props.name}
        data-should-validate={Boolean(props.value)}
        className="text-field"
      />
    </div>
  )
}
