import { BaseEntity } from './baseEntity';
import { SanityImage } from './sanityImage';

export interface Brands extends BaseEntity {
  title: string
  image: SanityImage
}
