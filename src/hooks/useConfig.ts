import { useQuery } from "@tanstack/react-query"
import FirebaseService from "../services/FirebaseService"
import { BandPageConfig } from "../types/BandPageConfig"
import { ConfigQueryKeys } from "../constants/QueryKeys"

const queryFn = async () => {
  const data = await FirebaseService.getDocuments("configs")
  return data.docs[0].data() as BandPageConfig
}

export const useConfig = () => {
  return useQuery({
    queryKey: ConfigQueryKeys.configs,
    queryFn,
  })
}
