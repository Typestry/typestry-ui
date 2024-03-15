import { initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { getDownloadURL, getStorage } from "firebase-admin/storage"
import { onRequest } from "firebase-functions/v2/https"
import * as express from "express"
import * as path from "path"
import * as fs from "fs/promises"

const app = express()
initializeApp()

const firestore = getFirestore()
const storage = getStorage()

app.get("*", async (_, res) => {
  try {
    const configs = await firestore.collection("configs").limit(1).get()

    if (configs.empty) {
      res.status(404).send("No configs found!")
      return
    }

    const filePath = path.resolve(__dirname, "../dist", "index.html")
    let data = await fs.readFile(filePath, "utf-8")
    const config = configs.docs[0].data()
    const socialImageRef = storage.bucket().file(config.socialImage)
    const socialImageUrl = await getDownloadURL(socialImageRef)

    data = data
      .replace(/__TITLE__/g, config.bandName)
      .replace(/__DESCRIPTION__/g, config.description)
      .replace(/__KEYWORDS__/g, config.keywords.join(","))
      .replace(/__OG_TITLE__/g, config.bandName)
      .replace(/__OG_DESCRIPTION__/g, config.description)
      .replace(/__OG_IMAGE__/g, socialImageUrl)

    res.send(data)
  } catch (error) {
    res.status(500).send("Internal Server Error")
  }
})

app.use(express.static(path.resolve(__dirname, "../dist")))

exports.renderSEO = onRequest(app)
