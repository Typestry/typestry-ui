const admin = require("firebase-admin") // required

// initialization
const projectId = "means-motive"
process.env.FIRESTORE_EMULATOR_HOST = "localhost:3334"
admin.initializeApp({ projectId })

const db = admin.firestore()

const BAND_NAME = "Means Motive"

// seed function
function getSeedData() {
  try {
    db.collection("configs").add({
      bandName: BAND_NAME,
      description:
        "Independent, Energetic, Alternative Rock & Roll from Lawrence, Kansas.",
      keywords: [
        BAND_NAME,
        "indie music",
        "alternative rock",
        "Kansas City",
        "Lawrence Kansas",
        "Kansas City music",
        "Lawrence Kansas music",
        "Kansas City band",
        "Lawrence Kansas band",
        "John Benda",
        "Jared Anderson",
        "Aaron Riffel",
        "John Robbs",
        "Ali Edwards",
      ],
      socialImage: "",
      mediaLinks: {
        instagram: {
          url: "https://www.instagram.com/meansmotive/",
          alt: "visit means motive profile on instagram",
          title: "Instagram",
        },
        facebook: {
          url: "https://www.facebook.com/meansmotive",
          alt: "visit means motive profile on facebook",
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
