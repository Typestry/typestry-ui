import {
  DetailedHTMLProps,
  LinkHTMLAttributes,
  MetaHTMLAttributes,
} from "react"
import { bandAssets } from "./bandAssets"

type LinkData = Array<
  DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>
>

type MetaData = Array<
  DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>
>

const socialImage = "https://www.carriedbybees.com/johnandjustin.jpg"

export const metaData: MetaData = [
  { name: "description", content: bandAssets.shortBio },
  { property: "og:title", content: bandAssets.bandName },
  { property: "og:description", content: bandAssets.shortBio },
  {
    property: "og:image",
    content: socialImage,
  },
]

export const linkData: LinkData = [
  {
    rel: "preload",
    href: "./assets/fonts/NotoSerif-Regular.ttf",
    as: "font",
    type: "font/truetype",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "./assets/fonts/NotoSerif-VariableFont.ttf",
    as: "font",
    type: "font/truetype",
    crossOrigin: "anonymous",
  },
]
