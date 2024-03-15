import { useEffect, useState } from "react"
import FirebaseService from "../services/firebaseService"

export const useGetDownloadUrls = ({
  paths,
  isEnabled = true,
}: FirebaseGetDownloadUrlsConfig) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>()
  const [data, setData] = useState<Array<string>>([])

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    Promise.all(paths.map(FirebaseService.getDownloadUrl))
      .then((urls) => {
        const cleanedUrls = urls.filter(Boolean) as Array<string>
        if (cleanedUrls.length === 0) throw new Error("No images found")
        setData(cleanedUrls)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [isEnabled])

  return { loading, error, data }
}
