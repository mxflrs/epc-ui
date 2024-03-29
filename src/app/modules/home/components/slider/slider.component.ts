import { Component, Input } from '@angular/core';
import { HeroSlider } from '../../../../../domain/heroSlider';
import { ImageBuilderService } from '../../../../shared/services/image-builder.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() sliderData: HeroSlider[] = [];

  constructor(private imageBuilder: ImageBuilderService) {}

  imageUrl(id: string, w: number, h: number) {
    return this.imageBuilder.image(id).url();
  }
}
