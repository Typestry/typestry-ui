export interface MediaLink {
  url: string
  alt: string
  title: string
}

export type MediaType =
  | "instagram"
  | "facebook"
  | "bandcamp"
  | "spotify"
  | "apple"

export type MediaLinks = { [key in MediaType]: MediaLink }

interface Config {
  id: string
  name: string
  // "bandName" will be deprecated in favor of "name"
  bandName: string
  keywords: Array<string>
  description: string
  socialImage: string
  mediaLinks: MediaLinks
  bannerImageUrl: string
}

export default Config
