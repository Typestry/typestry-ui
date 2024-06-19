import { useQuery } from "@tanstack/react-query"
import { SectionQueryKeys } from "@/constants/QueryKeys"
import FirebaseClient from "@/services/FirebaseClient"
import { SectionParams } from "@/types/SectionParams"

const queryFn = async () => {
  const firebase = FirebaseClient.getInstance()
  try {
    const data = await firebase.getDocuments("sections")
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Array<SectionParams>
  } catch (error) {
    throw new Error("Error fetching sections")
  }
}

export const useSections = () => {
  return useQuery({
    queryKey: SectionQueryKeys.sections,
    queryFn,
  })
}
