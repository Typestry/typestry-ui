import { useEffect, useState } from "react"
import FirebaseService from "../services/firebaseService"

export const useGetDownloadUrls = (paths: Array<string>) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [data, setData] = useState<Array<string | undefined>>()

  useEffect(() => {
    Promise.all(paths.map(FirebaseService.getDownloadUrl))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { loading, error, data }
}
