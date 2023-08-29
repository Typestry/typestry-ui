import axios from "axios"
import { ComponentProps, MouseEvent, ReactNode, useState } from "react"

type BaseFormProps = ComponentProps<"form">

interface FormProps extends Omit<BaseFormProps, "children"> {
  method: Required<BaseFormProps["method"]>
  action: Required<BaseFormProps["action"]>
  children: (isSubmitting: boolean, isError: boolean) => ReactNode
}

export const Form = (props: FormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    const form = e.currentTarget
    axios(form.action, {
      method: form.method,
      data: getFormData(form),
    })
      .then(() => form.reset())
      .catch(() => setIsError(true))
      .finally(() => setIsSubmitting(false))
    e.preventDefault()
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {props.children(isSubmitting, isError)}
    </form>
  )
}

const getFormData = (form: HTMLFormElement) => {
  let data = Object.assign({})
  new FormData(form).forEach((value, key) => {
    data[key] = value
  })
  return data
}
