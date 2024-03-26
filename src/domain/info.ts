export interface info {
    title: string
    address: string
    phone: string[]
    email: string | string[]
    socialMedia: socialMedia[]
  businessHours: businessHours
}

interface socialMedia {
  title: string
  link: string
}

interface businessHours {
  weekdays: {
    startDate: string
    endDate: string
  },
  weekends: {
    startDate: string
    endDate: string
  }
}
