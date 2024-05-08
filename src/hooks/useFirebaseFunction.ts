import { useState } from "react"
import FirebaseService from "../services/FirebaseService"

export const useFirebaseFunction = () => {
  const [loading, setLoading] = useState(false)

  const runHttpsFunction = async (
    ...args: Parameters<typeof FirebaseService.runHttpsFunction>
  ) => {
    setLoading(true)
    try {
      await FirebaseService.runHttpsFunction(...args)
    } catch (err) {
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { runHttpsFunction, loading }
}
