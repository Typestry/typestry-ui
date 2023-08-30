import { createBandPageConfig } from "./services/createBandPageConfig"
import { ReactComponent as apple } from "./assets/apple.svg"
import { ReactComponent as spotify } from "./assets/spotify.svg"
import { ReactComponent as bandcamp } from "./assets/bandcamp.svg"
import { ReactComponent as instagram } from "./assets/instagram.svg"
import bliss from "./assets/bliss.webp"

export default createBandPageConfig({
  bandName: "Carried by Bees",
  description:
    "Longtime collaborators John Benda and Justin Klaas formed Carried by Bees over three years ago. Bliss is their first proper release and released on July 14th of 2023.",
  keywords: [
    "Carried by Bees",
    "indie music",
    "alternative rock",
    "Kansas City band",
    "John Benda",
    "Justin Klaas",
  ],
  socialImage: bliss,
  mediaLinks: {
    spotify: {
      url: "https://open.spotify.com/album/5tGuHNvKJGT97QXkjDuHL8?si=AePd7DnBSX6L8hH4x8FRGw",
      icon: spotify,
      alt: "listen to on spotify",
      title: "Spotify",
    },
    apple: {
      url: "http://itunes.apple.com/album/id/1702315264",
      icon: apple,
      alt: "listen to on apple music",
      title: "Apple Music",
    },
    instagram: {
      url: "https://www.instagram.com/carriedbybees",
      icon: instagram,
      alt: "vistit carried by bees profile on instagram",
      title: "Instagram",
    },
    bandcamp: {
      url: "https://carriedbybees.bandcamp.com/album/bliss",
      icon: bandcamp,
      alt: "purchase on bandcamp",
      title: "Bandcamp",
    },
  },
})
