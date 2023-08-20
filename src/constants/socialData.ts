import spotify from "../assets/spotify.svg"
import apple from "../assets/apple.svg"
import instagram from "../assets/instagram.svg"
import bandcamp from "../assets/bandcamp.svg"

export const socialData = {
  spotify: {
    url: "https://open.spotify.com/album/5tGuHNvKJGT97QXkjDuHL8?si=AePd7DnBSX6L8hH4x8FRGw",
    image: spotify,
    alt: "listen to on spotify",
    title: "Spotify",
  },
  apple: {
    url: "http://itunes.apple.com/album/id/1702315264",
    image: apple,
    alt: "listen to on apple music",
    title: "Apple Music",
  },
  instagram: {
    url: "https://www.instagram.com/carriedbybees",
    image: instagram,
    alt: "vistit carried by bees profile on instagram",
    title: "Instagram",
  },
  bandcamp: {
    url: "https://carriedbybees.bandcamp.com/album/bliss",
    image: bandcamp,
    alt: "purchase on bandcamp",
    title: "Bandcamp",
  },
} as const

export type SocialData = typeof socialData
