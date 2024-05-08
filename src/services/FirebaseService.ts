import axios, { AxiosRequestConfig } from "axios"
import { FirebaseOptions, initializeApp } from "firebase/app"
import {
  DocumentData,
  WithFieldValue,
  getFirestore,
  addDoc,
  collection as col,
  getDocs,
} from "firebase/firestore"
import { StorageError, getDownloadURL, getStorage, ref } from "firebase/storage"

class FirebaseService {
  static functionsUrl: string = ""

  static init(config: FirebaseOptions & { functionsUrl: string }) {
    const { functionsUrl, ...rest } = config
    initializeApp(rest)
    this.functionsUrl = functionsUrl
  }

  static db() {
    return getFirestore()
  }

  static async addDocument<
    Collection extends string,
    Payload extends WithFieldValue<DocumentData>,
  >(collection: Collection, payload: Payload) {
    const ref = col(this.db(), collection)
    return addDoc(ref, payload)
  }

  static getDocuments<Collection extends string>(collection: Collection) {
    const ref = col(this.db(), collection)
    return getDocs(ref)
  }

  static async getDownloadUrl(path: string) {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, path)
      const url = await getDownloadURL(storageRef)
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
  }

  static runHttpsFunction<Payload = Record<string, any>>(
    name: string,
    payload: Payload,
    config?: AxiosRequestConfig<Payload>,
  ) {
    const url = `${this.functionsUrl}/${name}`
    return axios.post(url, payload, config)
  }
}

export default FirebaseService
