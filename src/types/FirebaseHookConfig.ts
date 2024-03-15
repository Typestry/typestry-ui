import FirebaseService from "../services/firebaseService"

export type FirebaseHookConfig<Data> = {
  isEnabled?: boolean
} & Data

export interface FirebaseQueryHookReturn<Data> {
  data?: Data
  loading: boolean
  error: unknown
}

export interface FirebaseMutationHookReturn<Data> {
  data: Data
  loading: boolean
  error: unknown
  addDocument: (
    ...args: Parameters<typeof FirebaseService.addDocument>
  ) => Promise<void>
}
