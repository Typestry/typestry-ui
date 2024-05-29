"use client"

import { useQuery } from "@tanstack/react-query"
import { FirebaseClient } from "@/services/FirebaseClient"
import { BandPageConfig } from "@/types/BandPageConfig"
import { ConfigQueryKeys } from "@/constants/QueryKeys"

const queryFn = async () => {
  const firebase = FirebaseClient.getInstance()
  const data = await firebase.getDocuments("configs")
  return data.docs[0].data() as BandPageConfig
}

export const useConfig = () => {
  return useQuery({
    queryKey: ConfigQueryKeys.configs,
    queryFn,
  })
}
