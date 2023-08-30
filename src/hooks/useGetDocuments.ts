import { useEffect, useState } from "react"
import FirebaseService from "../services/firebaseService"
import { DocumentData } from "firebase/firestore"

export const useGetDocuments = <Document extends DocumentData>(
  collection: string,
) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Array<Document>>([])
  const [error, setError] = useState<any>()

  useEffect(() => {
    setLoading(true)
    FirebaseService.getDocuments(collection)
      .then((data) => {
        const allDocs: Array<Document> = []
        data.forEach((doc) => {
          allDocs.push(doc.data() as Document)
        })
        setData(allDocs)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { loading, data, error }
}
