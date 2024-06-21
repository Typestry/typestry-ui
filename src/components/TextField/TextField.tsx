import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from "react"

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
  name: string
  "aria-label": string
  label: string
  slotProps?: {
    root?: ComponentPropsWithoutRef<"div">
  }
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <div className="group">
      <label htmlFor={props.name} className="label">
        {props.label}
      </label>
      <input ref={ref} {...props} className="text-field" />
    </div>
  )
})

export default TextField
