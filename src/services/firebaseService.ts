import axios, { AxiosRequestConfig } from "axios"
import { initializeApp } from "firebase/app"
import {
  DocumentData,
  WithFieldValue,
  getFirestore,
  addDoc,
  collection as col,
  getDocs,
} from "firebase/firestore"
import { StorageError, getDownloadURL, getStorage, ref } from "firebase/storage"

const FirebaseService = {
  getFirebaseFunctionsUrl: () =>
    import.meta.env.VITE_APP_FUNCTIONS_URL as string,
  getFirebaseConfig: () => ({
    apiKey: import.meta.env.VITE_APP_API_KEY as string,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN as string,
    projectId: import.meta.env.VITE_APP_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_APP_APP_ID as string,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID as string,
  }),
  init: () => {
    initializeApp(FirebaseService.getFirebaseConfig())
  },
  db: () => {
    return getFirestore()
  },
  addDocument: <
    Collection extends string,
    Payload extends WithFieldValue<DocumentData>,
  >(
    collection: Collection,
    payload: Payload,
  ) => {
    const ref = col(FirebaseService.db(), collection)
    return addDoc(ref, payload)
  },
  getDocuments: <Collection extends string>(collection: Collection) => {
    const ref = col(FirebaseService.db(), collection)
    return getDocs(ref)
  },
  getDownloadUrl: async (path: string) => {
    try {
      console.log({ path })
      const storage = getStorage()
      console.log({ storage })
      const storageRef = ref(storage, path)
      const url = await getDownloadURL(storageRef)
      console.log({ url })
      return url
    } catch (err) {
      const error = err as StorageError
      switch (error.code) {
        case "storage/object-not-found":
          throw "File doesn't exist"
        case "storage/unauthorized":
          throw "User doesn't have permission to access the object"
        case "storage/canceled":
          throw "User canceled the upload"
        default:
          "An unknown error occurred."
      }
    }
  },
  runHttpsFunction: <Payload = Record<string, any>>(
    name: string,
    payload: Payload,
    config?: AxiosRequestConfig<Payload>,
  ) => {
    const url = `${FirebaseService.getFirebaseFunctionsUrl()}/${name}`
    return axios.post(url, payload, config)
  },
}

export default FirebaseService
