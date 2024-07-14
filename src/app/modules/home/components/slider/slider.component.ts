import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSlider } from '../../../../../domain/heroSlider';
import { ImageBuilderService } from '../../../../shared/services/image-builder.service';
import { ModalsService } from 'src/app/shared/services/modals.service';

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
  public keepSlideWide = true;

  constructor(private imageBuilder: ImageBuilderService, private modalServices: ModalsService) {
    // setTimeout(() => {
    //   this.keepSlideWide = false;
    // }, 6000);
  }

  imageUrl(id: string) {
    return this.imageBuilder.image(id).url();
  }

  goToSlide(i: number) {
    this.currentSlide = i;
  }

  nextSlide() {
    if (this.currentSlide < this.sliderData.length - 1) {
      this.currentSlide++
    } else {
      this.currentSlide = 0
    }
  }

  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.sliderData.length - 1
    } else {
      this.currentSlide--
    }
  }

  onOpenContactModal() {
    this.modalServices.toggleContactModal();
  }
}
