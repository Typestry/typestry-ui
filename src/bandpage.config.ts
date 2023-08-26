import classNames from "classnames"
import { createBandPageConfig } from "./services/createBandPageConfig"

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
  socialImage: "./src/assets/Bliss_fixed.png",
  mediaLinks: {
    spotify: {
      url: "https://open.spotify.com/album/5tGuHNvKJGT97QXkjDuHL8?si=AePd7DnBSX6L8hH4x8FRGw",
      icon: "./src/assets/spotify.svg",
      alt: "listen to on spotify",
      title: "Spotify",
    },
    apple: {
      url: "http://itunes.apple.com/album/id/1702315264",
      icon: "./src/assets/apple.svg",
      alt: "listen to on apple music",
      title: "Apple Music",
    },
    instagram: {
      url: "https://www.instagram.com/carriedbybees",
      icon: "./src/assets/instagram.svg",
      alt: "vistit carried by bees profile on instagram",
      title: "Instagram",
    },
    bandcamp: {
      url: "https://carriedbybees.bandcamp.com/album/bliss",
      icon: "./src/assets/bandcamp.svg",
      alt: "purchase on bandcamp",
      title: "Bandcamp",
    },
  },
  theme: {
    backgroundClassName:
      "bg-no-repeat md:bg-center bg-left bg-fixed bg-cover bg-[rgb(0,0,0,0.6)]",
    bannerClassName: "min-h-[100vh] bg-grass",
    bannerTextClassName: "uppercase",
    sectionHeaderClassName: "text-fuchsia-300",
    linkClassName: (active: boolean) =>
      classNames(
        {
          "border-fuchsia-300 text-fuchsia-300 border-b-2": active,
        },
        "hover:border-fuchsia-300 hover:text-fuchsia-300 hover:border-b-2 p-2 cursor-pointer transition-colors duration-150",
      ),
  },
})
