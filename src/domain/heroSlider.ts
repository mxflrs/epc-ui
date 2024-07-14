import { BaseEntity } from './baseEntity';
import { SanityImage } from './sanityImage';

export interface HeroSlider extends BaseEntity {
    title: string
    subtitle?: string
    description: string
    image: SanityImage
}
