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
            className={classNames("Tui-TextField peer", props.className)}
            ref={ref}
          />
          <Label
            className="peer-focus:-translate-y-8 peer-focus:Tui-Caption peer-placeholder-shown:Tui-Body1 peer-placeholder-shown:translate-y-0 Tui-Caption -translate-y-8 absolute bottom-4"
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
