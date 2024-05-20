import { BaseEntity } from './baseEntity';

export interface Services extends BaseEntity {
  parentService: string
  description: string
  icon: string
  slug: string
  subservices: subServices[]
  image: string
}

interface subServices {
  service: string
  description: string
  icon: string
  slug: string
}
