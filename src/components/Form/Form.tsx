import axios from "axios"
import { ComponentProps, MouseEvent, ReactNode, useState } from "react"

interface FormProps extends Omit<ComponentProps<"form">, "children"> {
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
      data: new FormData(form),
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
