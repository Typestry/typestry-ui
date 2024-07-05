import { BaseSyntheticEvent, useCallback, useState } from "react"
import {
  FieldValues,
  UseFormRegister,
  useForm as useReactHookForm,
} from "react-hook-form"

export interface UseFormArgs<Values> {
  onSubmit: (values: Values) => Promise<void>
}

export interface UseFormReturn<Values extends FieldValues> {
  isSubmitting: boolean
  handleSubmit: (e: BaseSyntheticEvent) => void
  isError: boolean
  register: UseFormRegister<Values>
}

export const useForm = <Values extends FieldValues>({
  onSubmit,
}: UseFormArgs<Values>): UseFormReturn<Values> => {
  const [isError, setIsError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    reset,
  } = useReactHookForm<Values>()

  const handleSubmit = useCallback(
    (e: BaseSyntheticEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      hookFormHandleSubmit(onSubmit)(e)
        .catch(() => setIsError(true))
        .finally(() => {
          setIsSubmitting(false)
          reset()
        })
    },
    [hookFormHandleSubmit, onSubmit, reset],
  )

  return { handleSubmit, isError, isSubmitting, register }
}
