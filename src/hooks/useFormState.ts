import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react"

interface UseFormStateProps<V = Record<string, unknown>> {
  onSubmit: (values: V) => void | Promise<(values: V) => void>
  initialValues: V
}

export const useFormState = <V>({
  onSubmit,
  initialValues,
}: UseFormStateProps<V>) => {
  const [values, setValues] = useState<V>(initialValues)
  const [touched, setTouched] = useState<Record<keyof V, boolean>>(
    Object.assign({}),
  )
  const [isDirty, setIsDirty] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const resetForm = useCallback(() => {
    setValues(initialValues)
  }, [initialValues])

  useEffect(() => {
    resetForm()
  }, [resetForm])

  useEffect(() => {
    const isDirty = Object.values(touched).some(Boolean)
    setIsDirty(isDirty)
  }, [touched])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e: MouseEvent<HTMLFormElement>) => {
      try {
        e.preventDefault()
        setIsSubmitting(true)
        await onSubmit(values)
        resetForm()
      } catch (err) {
        console.error(err)
      } finally {
        setIsSubmitting(false)
      }
    },
    [values, resetForm, onSubmit, setIsSubmitting],
  )

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const name = e.currentTarget.name as keyof V
      if (values[name]) {
        setTouched((prev) => ({ ...prev, [name]: true }))
      } else {
        setTouched((prev) => ({ ...prev, [name]: false }))
      }
    },
    [values, touched],
  )

  const registerField = useCallback(
    (name: keyof V) => ({
      onChange: handleChange,
      disabled: isSubmitting,
      values,
      name,
      value: values[name],
      onBlur: handleBlur,
    }),
    [values, handleChange, isSubmitting, handleBlur],
  )

  return {
    handleChange,
    values,
    handleSubmit,
    registerField,
    isDirty,
    touched,
    isSubmitting,
  }
}
