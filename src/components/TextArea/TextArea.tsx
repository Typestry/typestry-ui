import { forwardRef } from "react"
import FormGroup, { FormGroupProps } from "@/components/FormGroup"

export interface TextAreaProps extends FormGroupProps<"textarea"> {}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <FormGroup
        {...props}
        ref={ref}
        inputComponent="textarea"
        slotProps={{ input: { className: "Tui-TextArea" } }}
      />
    )
  },
)

export default TextArea
