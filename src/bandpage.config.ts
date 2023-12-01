import { createBandPageConfig } from "./services/createBandPageConfig"
import { ReactComponent as Instagram } from "./assets/image/instagram.svg"
import { ReactComponent as Facebook } from "./assets/image/facebook.svg"

const BAND_NAME = "Means Motive"

export default createBandPageConfig({
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
      icon: Instagram,
      alt: "visit means motive profile on instagram",
      title: "Instagram",
    },
    facebook: {
      url: "https://www.facebook.com/meansmotive",
      icon: Facebook,
      alt: "visit means motive profile on facebook",
      title: "Facebook",
    },
  },
})
