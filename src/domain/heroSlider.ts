import { BaseEntity } from './baseEntity';

export interface HeroSlider extends BaseEntity {
    title: string
    subtitle?: string
    description: string
    image: string
}
