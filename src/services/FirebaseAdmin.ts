import "server-only"

import admin from "firebase-admin"

interface FirebaseAdminAppParams {
  projectId: string
  clientEmail: string
  storageBucket: string
  privateKey: string
}

export class FirebaseAdmin {
  private static instance: FirebaseAdmin

  private app: admin.app.App

  private formatPrivateKey(key: string) {
    return key.replace(/\\n/g, "\n")
  }

  private createFirebaseAdminApp(params: FirebaseAdminAppParams) {
    const privateKey = this.formatPrivateKey(params.privateKey)

    if (admin.apps.length > 0) {
      return admin.app()
    }

    const cert = admin.credential.cert({
      projectId: params.projectId,
      clientEmail: params.clientEmail,
      privateKey,
    })

    return admin.initializeApp({
      credential: cert,
      projectId: params.projectId,
      storageBucket: params.storageBucket,
    })
  }

  private constructor() {
    this.app = this.createFirebaseAdminApp({
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
      privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
    })
  }

  static getInstance() {
    // We want to ensure that we only have one instance of FirebaseAdmin
    if (!FirebaseAdmin.instance) {
      FirebaseAdmin.instance = new FirebaseAdmin()
    }

    return FirebaseAdmin.instance
  }

  getApp() {
    return this.app
  }
}
