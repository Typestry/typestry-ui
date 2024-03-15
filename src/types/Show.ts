interface CTA {
  url: string // "https://www.loremipsum.com/ipsum"
  label: string // "Tickets"
  altText: string // "Purchase tickets"
}

export interface Show {
  city: string // "Kansas City, MO"
  date: string // "2023‐09‐22T07:00:00−06:00 "
  description: string // "A description"
  price: number // 15
  venue: string // "The Rhino"
  callToAction: CTA
}