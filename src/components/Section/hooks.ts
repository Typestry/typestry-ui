import { useQuery } from "@tanstack/react-query"
import { SectionQueryKeys } from "../../constants/QueryKeys"
import FirebaseService from "../../services/FirebaseService"
import { SectionParams } from "../../types/SectionParams"

const queryFn = async () => {
  try {
    const data = await FirebaseService.getDocuments("sections")
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
