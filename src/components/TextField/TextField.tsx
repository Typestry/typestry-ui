import { ComponentProps } from "react"
import { useField } from "../../hooks/useField"

type InputProps = ComponentProps<"input">

interface TextFieldProps extends InputProps {
  name: string
  "aria-label": string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  const inputProps = useField(props.name)

  return (
    <div className="group">
      <label htmlFor={props.name} className="label">
        {props.label}
      </label>
      <input {...props} {...inputProps} className="text-field" />
    </div>
  )
}
