import { MediaLinks } from "./MediaLink"

export interface BandPageConfig {
  bandName: string
  keywords: Array<string>
  description: string
  socialImage: string
  mediaLinks: MediaLinks
}
