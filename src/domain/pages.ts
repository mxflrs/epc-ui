import { BaseEntity } from './baseEntity';

export interface Page extends BaseEntity {
  title: string
  slug: string
  content: string
}
