import { ChangeEventHandler, useCallback, useState } from "react"

export const useField = (name: string) => {
  const [isValid, setIsValid] = useState(true)

  const handleBlur: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setIsValid(e.currentTarget.checkValidity())
    },
    [setIsValid],
  )

  const inputProps = {
    id: name,
    "data-should-validate": !isValid,
    onBlur: handleBlur,
  }

  return inputProps
}
