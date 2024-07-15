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
    console.log(props.value)
    return (
      <FormGroup {...slotProps?.root}>
        <div className="relative">
          <input
            {...props}
            id={props.name}
            placeholder=" "
            className={classNames("TuiTextField peer", props.className)}
            data-should-validate={Boolean(props.error)}
            ref={ref}
          />
          <Label
            className="group-focus-within:font-medium group-focus-within:TuiCaption peer-focus:-translate-y-8 peer-focus:TuiCaption peer-placeholder-shown:TuiBody1 peer-placeholder-shown:translate-y-0 TuiCaption -translate-y-8 absolute bottom-4"
            {...slotProps?.label}
            htmlFor={props.name}
          >
            {props.label}
          </Label>
        </div>
        {props.error && (
          <HelperText {...slotProps?.helperText}>{props.helperText}</HelperText>
        )}
      </FormGroup>
    )
  },
) as (props: TextFieldProps) => JSX.Element
