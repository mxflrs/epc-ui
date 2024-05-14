import { BaseEntity } from './baseEntity';

export interface Info extends BaseEntity {
    title: string
    address: string
    phone: string[]
    email: string | string[]
    socialMedia: socialMedia[]
    businessHours: businessHours
}

interface socialMedia {
  name: string
  link: string
  key: string
  icon?: string
}

interface businessHours {
  weekdays: hoursStructure
  weekends: hoursStructure
}

interface hoursStructure {
  startTime: string
  endTime: string
}
