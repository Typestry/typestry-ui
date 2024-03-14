import { useEffect, useState } from "react"
import FirebaseService from "../services/firebaseService"
import { DocumentData } from "firebase/firestore"

export const useGetDocuments = <Document extends WithId<DocumentData>>(
  collection: string,
) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Array<Document>>([])
  const [error, setError] = useState<any>()

  useEffect(() => {
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
