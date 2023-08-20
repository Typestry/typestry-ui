import { useState } from "react"
import FirebaseService from "../services/firebaseService"
import { DocumentData, DocumentReference } from "firebase/firestore"

export const useAddDocument = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>()
  const [data, setData] =
    useState<DocumentReference<DocumentData, DocumentData>>()

  const addDocument = async (
    ...args: Parameters<typeof FirebaseService.addDocument>
  ) => {
    setLoading(true)
    try {
      const data = await FirebaseService.addDocument(...args)
      setData(data)
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return { loading, error, addDocument, data }
}
