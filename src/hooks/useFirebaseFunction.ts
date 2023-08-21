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
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { runHttpsFunction, loading, error }
}
