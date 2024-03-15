interface FirebaseHookConfig {
  isEnabled?: boolean
}

interface FirebaseGetDocumentsConfig extends FirebaseHookConfig {
  collection: string
}

interface FirebaseGetDownloadUrlsConfig extends FirebaseHookConfig {
  paths: Array<string>
}
