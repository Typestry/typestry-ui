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

export interface BandPageConfig {
  id: string
  bandName: string
  keywords: Array<string>
  description: string
  socialImage: string
  mediaLinks: MediaLinks
  bannerImageUrl: string
}
