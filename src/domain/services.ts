export interface services {
  parentService: string
  slug: string
  subservices: subServices[]
}

interface subServices {
  service: string
  description: string
  icon: string
  slug: string
}
