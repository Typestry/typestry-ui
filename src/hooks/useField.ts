import { useController } from "react-hook-form"

const useField = (name: string) => {
  const { field } = useController({ name })

  return field
}

export default useField
