import { BaseEntity } from './baseEntity';

export interface HeroSlider extends BaseEntity {
    title: string
    subtitle?: string
    description: string
    image: SanityImage
}

interface SanityImage {
  asset: {
    _type: string
    _ref: string
  }

}
