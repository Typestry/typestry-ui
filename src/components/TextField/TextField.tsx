import { ComponentPropsWithRef, forwardRef } from "react"
import FormGroup from "@/components/FormGroup"
import Label, { LabelProps } from "@/components/Label"
import HelperText, { HelperTextProps } from "@/components/HelperText"
import classNames from "classnames"

export interface TextFieldProps extends ComponentPropsWithRef<"input"> {
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

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ slotProps, ...props }, ref) => {
    return (
      <FormGroup {...slotProps?.root}>
        <Label {...slotProps?.label} htmlFor={props.name}>
          {props.label}
        </Label>
        <input
          {...props}
          id={props.name}
          className={classNames("Tui-TextField", props.className)}
          ref={ref}
        />
        {props.error && (
          <HelperText {...slotProps?.helperText}>{props.helperText}</HelperText>
        )}
      </FormGroup>
    )
  },
)

export default TextField
