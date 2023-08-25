import { MediaLinks } from "./MediaLink"

export interface BandPageConfig {
  bandName: string
  keywords: Array<string>
  description: string
  socialImage: string
  mediaLinks: MediaLinks
  theme?: {
    backgroundClassName?: string
    bannerTextClassName?: string
    bannerClassName?: string
    linkClassName?: (active: boolean) => string
    secondaryColor?: string
    sectionHeaderClassName?: string
  }
}
