import { BaseEntity } from './baseEntity';

export interface Page extends BaseEntity {
  title: string
  slug: {
    current: string,
    _type: string
  }
  content: string
}
