"use client"

import { BaseSyntheticEvent, useCallback, useState } from "react"
import {
  FieldValues,
  UseFormRegister,
  useForm as useReactHookForm,
} from "react-hook-form"

interface UseFormArgs<Values> {
  onSubmit: (values: Values) => Promise<void>
}

interface UseFormReturn<Values extends FieldValues> {
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
    async (e: BaseSyntheticEvent) => {
      e.preventDefault()
      setIsSubmitting(true)
      try {
        await hookFormHandleSubmit(onSubmit)(e)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsSubmitting(false)
        reset()
      }
    },
    [hookFormHandleSubmit, onSubmit],
  )

  return { handleSubmit, isError, isSubmitting, register }
}
