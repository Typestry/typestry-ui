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
      console.log(data)
      setData(data)
    } catch (err) {
      setError(err)
    } finally {
      console.log("finally")
      setLoading(false)
    }
  }

  return { loading, error, addDocument, data }
}
