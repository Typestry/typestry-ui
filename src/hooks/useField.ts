import { useController } from "react-hook-form"

export const useField = (name: string) => {
  const { field } = useController({ name })

  return field
}
