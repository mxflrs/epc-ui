import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { HeroSlider } from '../../../../../domain/heroSlider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input() sliderData: HeroSlider[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.sliderData, 'FROM INSIDE');
  }

  ngOnChanges(): void {
    console.log(this.sliderData, 'FROM ngOnChanges');
  }

  ngOnDestroy(): void {}
}
