import { ComponentPropsWithRef, forwardRef } from "react"
import { FormGroup } from "@/FormGroup"
import { Label, LabelProps } from "@/Label"
import { HelperText, HelperTextProps } from "@/HelperText"
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

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ slotProps, ...props }, ref) {
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
) as (props: TextFieldProps) => JSX.Element
