import { MouseEvent, useCallback, useState } from "react"

interface UseFormArgs<Values> {
  onSubmit: (values: Values) => Promise<void>
}

export const useForm = <Values>({ onSubmit }: UseFormArgs<Values>) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLFormElement>) => {
      setIsSubmitting(true)
      const form = e.currentTarget
      const data = getFormData(form)
      onSubmit(data)
        .then(() => form.reset())
        .catch(() => setIsError(true))
        .finally(() => setIsSubmitting(false))
      e.preventDefault()
    },
    [onSubmit],
  )

  return { isSubmitting, handleSubmit, isError }
}

const getFormData = (form: HTMLFormElement) => {
  let data = Object.assign({})
  new FormData(form).forEach((value, key) => {
    data[key] = value
  })
  return data
}
