import { ComponentProps, useState } from "react"

type InputProps = ComponentProps<"input">

interface TextFieldProps extends InputProps {
  "aria-label": string
  label: string
}

export const TextField = (props: TextFieldProps) => {
  const [isValid, setIsValid] = useState(true)

  return (
    <div className="group">
      <label htmlFor={props.name} className="label">
        {props.label}
      </label>
      <input
        {...props}
        id={props.name}
        data-should-validate={!isValid}
        className="text-field"
        onBlur={(e) => setIsValid(e.currentTarget.checkValidity())}
      />
    </div>
  )
}
