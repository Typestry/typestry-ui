import { ComponentPropsWithRef, forwardRef } from "react"
import FormGroup from "@/components/FormGroup"
import Label, { LabelProps } from "@/components/Label"
import HelperText, { HelperTextProps } from "@/components/HelperText"
import classNames from "classnames"

export interface TextAreaProps extends ComponentPropsWithRef<"textarea"> {
  name: string
  helperText?: string
  error?: boolean
  label?: string
  slotProps?: {
    root?: React.ComponentProps<"div">
    label?: LabelProps
    helperText?: HelperTextProps
  }
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ slotProps, ...props }, ref) => {
    return (
      <FormGroup {...slotProps?.root}>
        <Label {...slotProps?.label} htmlFor={props.name}>
          {props.label}
        </Label>
        <textarea
          {...props}
          id={props.name}
          className={classNames("Tui-TextArea", props.className)}
          ref={ref}
        />
        {props.error && (
          <HelperText {...slotProps?.helperText}>{props.helperText}</HelperText>
        )}
      </FormGroup>
    )
  },
)

export default TextArea
