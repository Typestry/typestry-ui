import {
  ComponentProps,
  ComponentPropsWithRef,
  ElementType,
  Ref,
  createElement,
  forwardRef,
} from "react"
import Label, { LabelProps } from "@/components/Label"
import classNames from "classnames"
import HelperText, { HelperTextProps } from "@/components/HelperText"

type SlotProps<Input extends ElementType> = {
  root?: ComponentProps<"div">
  label?: LabelProps
  input?: ComponentPropsWithRef<Input>
  helperText?: HelperTextProps
}

export interface FormGroupProps<Input extends ElementType> {
  name: string
  error: boolean
  helperText: string
  label: string
  inputComponent: Input
  slotProps?: SlotProps<Input>
}

export const FormGroup = forwardRef(function FormGroup<
  Input extends ElementType,
>(props: FormGroupProps<Input>, ref: Ref<ComponentProps<Input>>) {
  const { slotProps, ...inputProps } = props

  const inputComponent = createElement(props.inputComponent, {
    ...inputProps,
    id: props.name,
    ref,
    name: props.name,
  })

  return (
    <div
      {...slotProps?.root}
      className={classNames("Tui-FormGroup", props.slotProps?.root?.className)}
    >
      <Label
        {...slotProps?.label}
        id={props.name}
        className={classNames("Tui-Label", slotProps?.label?.className)}
      >
        {props.label}
      </Label>
      {inputComponent}
      {props.error && (
        <HelperText {...slotProps?.helperText}>{props.helperText}</HelperText>
      )}
    </div>
  )
})

export default FormGroup
