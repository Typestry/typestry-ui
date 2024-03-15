import { useState } from "react"
import FirebaseService from "../services/firebaseService"
import { FirebaseMutationHookReturn } from "../types/FirebaseHookConfig"

export const useAddDocument = (): FirebaseMutationHookReturn<
  string | undefined
> => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>()
  const [data, setData] = useState<string>()

  const addDocument: FirebaseMutationHookReturn<
    string | undefined
  >["addDocument"] = async (...args) => {
    setLoading(true)
    try {
      const data = await FirebaseService.addDocument(...args)
      setData(data.id)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, addDocument, data }
}
