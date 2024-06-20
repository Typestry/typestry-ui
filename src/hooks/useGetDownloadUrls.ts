import { useEffect, useState } from "react"
import FirebaseClient from "@/services/FirebaseClient"

export interface UseGetDownloadUrlsProps {
  paths: Array<string> | string
  isEnabled?: boolean
}

export const getDownloadUrl = (path: string) => {
  const firebase = FirebaseClient.getInstance()
  return firebase.getDownloadUrl(path)
}

const useGetDownloadUrls = ({
  paths,
  isEnabled = true,
}: UseGetDownloadUrlsProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<Array<string>>()

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    const pathList = Array.isArray(paths) ? paths : [paths]

    Promise.all(pathList.map(getDownloadUrl))
      .then((urls) => {
        const cleanedUrls = urls.filter(Boolean)
        if (cleanedUrls.length === 0) throw new Error("No images found")
        setData(cleanedUrls)
      })
      .catch(setError)
      .finally(() => setLoading(false))
  }, [isEnabled, paths])

  return { loading, error, data }
}

export default useGetDownloadUrls
