"use client"

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app"
import {
  getFirestore,
  Firestore,
  collection,
  getDocs,
} from "firebase/firestore"
import {
  getStorage,
  FirebaseStorage,
  getDownloadURL,
  ref,
} from "firebase/storage"

interface FirebaseClientParams {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export class FirebaseClient {
  private static instance: FirebaseClient

  private app: FirebaseApp
  private db: Firestore
  private storage: FirebaseStorage

  private createFirebaseClientApp(params: FirebaseClientParams) {
    if (getApps().length > 0) {
      return getApp()
    }

    return initializeApp({
      apiKey: params.apiKey,
      authDomain: params.authDomain,
      projectId: params.projectId,
      storageBucket: params.storageBucket,
      messagingSenderId: params.messagingSenderId,
      appId: params.appId,
    })
  }

  private constructor() {
    this.app = this.createFirebaseClientApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
      appId: process.env.NEXT_PUBLIC_APP_ID as string,
    })

    this.db = getFirestore(this.app)
    this.storage = getStorage(this.app)
  }

  static getInstance() {
    if (!FirebaseClient.instance) {
      FirebaseClient.instance = new FirebaseClient()
    }

    return FirebaseClient.instance
  }

  getApp() {
    return this.app
  }

  getDb() {
    return this.db
  }

  getDocuments(collectionName: string) {
    const collectionRef = collection(this.db, collectionName)
    return getDocs(collectionRef)
  }

  getDownloadUrl(path?: string) {
    if (!path) {
      throw new Error("Path is required")
    }

    const storageRef = ref(this.storage, path)
    return getDownloadURL(storageRef)
  }
}
