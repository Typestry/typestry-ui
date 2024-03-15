import { useEffect, useState } from "react"
import FirebaseService from "../services/firebaseService"
import { DocumentData } from "firebase/firestore"
import {
  FirebaseHookConfig,
  FirebaseQueryHookReturn,
} from "../types/FirebaseHookConfig"

export const useGetDocuments = <Document extends WithId<DocumentData>>({
  collection,
  isEnabled = true,
}: FirebaseHookConfig<{ collection: string }>): FirebaseQueryHookReturn<
  Array<Document>
> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<Document>>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    FirebaseService.getDocuments(collection)
      .then((data) => {
        const allDocs: Array<Document> = []
        data.forEach((doc) => {
          allDocs.push({ ...doc.data(), id: doc.id } as Document)
        })
        setData(allDocs)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { loading, data, error }
}
