import { ComponentPropsWithRef, forwardRef } from "react"
import { FormGroup } from "@/FormGroup"
import { Label, LabelProps } from "@/Label"
import { HelperText, HelperTextProps } from "@/HelperText"
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

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ slotProps, ...props }, ref) {
    return (
      <FormGroup {...slotProps?.root}>
        <div className="flex flex-col-reverse">
          <textarea
            {...props}
            id={props.name}
            placeholder=" "
            className={classNames("TuiTextArea peer", props.className)}
            data-should-validate={Boolean(props.error)}
            ref={ref}
          />
          <Label
            className="peer-focus:font-medium peer-focus:TuiCaption peer-placeholder-shown:TuiBody1 TuiCaption transition-all ease-in-out duration-300"
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
) as (props: TextAreaProps) => JSX.Element
