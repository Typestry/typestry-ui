import { ComponentProps } from "react"

type InputProps = ComponentProps<"textarea">

interface TextAreaProps extends InputProps {
  "aria-label": string
  label: string
}

export const TextArea = (props: TextAreaProps) => {
  return (
    <div className="group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        {...props}
        id={props.name}
        data-should-validate={Boolean(props.value)}
        className="text-area"
      />
    </div>
  )
}
