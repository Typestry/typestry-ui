"use client"

import { useEffect, useState } from "react"
import { FirebaseClient } from "@/services/FirebaseClient"

interface UseGetDownloadUrlsProps {
  paths: Array<string>
  isEnabled?: boolean
}

const getDownloadUrl = (path: string) => {
  const firebase = FirebaseClient.getInstance()
  return firebase.getDownloadUrl(path)
}

export const useGetDownloadUrls = ({
  paths = [],
  isEnabled = true,
}: UseGetDownloadUrlsProps) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<Array<string>>()

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    Promise.all(paths.map(getDownloadUrl))
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
