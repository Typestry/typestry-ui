import { useState } from "react"
import FirebaseService from "../services/firebaseService"

export const useFirebaseFunction = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>()

  const runHttpsFunction = async (
    ...args: Parameters<typeof FirebaseService.runHttpsFunction>
  ) => {
    setLoading(true)
    try {
      await FirebaseService.runHttpsFunction(...args)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return { runHttpsFunction, loading, error }
}
