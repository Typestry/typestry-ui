const admin = require("firebase-admin") // required

// initialization
const projectId = "web-template"
process.env.FIRESTORE_EMULATOR_HOST = "localhost:3334"
admin.initializeApp({ projectId })

const db = admin.firestore()

const BAND_NAME = "WEB TEMPLATE BAND NAME"

// seed function
function getSeedData() {
  try {
    db.collection("configs").add({
      bandName: BAND_NAME,
      description:
        "A web template for bands, musicians, and artists. Built with React, Vite, and Firebase.",
      keywords: [BAND_NAME],
      socialImage: "",
      mediaLinks: {
        instagram: {
          url: "",
          alt: "",
          title: "Instagram",
        },
        facebook: {
          url: "",
          alt: "",
          title: "Facebook",
        },
      },
    })
    console.log("database seed was successful")
  } catch (error) {
    console.log(error, "database seed failed")
  }
}

getSeedData()
