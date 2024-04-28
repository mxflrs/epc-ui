import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSlider } from '../../../../../domain/heroSlider';
import { ImageBuilderService } from '../../../../shared/services/image-builder.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [BrowserAnimationsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class SliderComponent {
  @Input() sliderData: HeroSlider[] = [];
  public currentSlide = 0;

  constructor(private imageBuilder: ImageBuilderService) {}

  imageUrl(id: string) {
    return this.imageBuilder.image(id).url();
  }

  nextSlide(i: number) {
    this.currentSlide = i;
  }
}
