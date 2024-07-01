import { forwardRef } from "react"
import FormGroup, { FormGroupProps } from "@/components/FormGroup"

export interface TextFieldProps extends FormGroupProps<"input"> {}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  return (
    <FormGroup
      {...props}
      ref={ref}
      inputComponent="input"
      slotProps={{ input: { className: "Tui-TextField" } }}
    />
  )
})

export default TextField
