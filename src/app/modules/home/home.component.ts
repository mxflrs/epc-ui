import { Component, ElementRef, HostListener, OnInit, ViewChild, signal } from '@angular/core';
import { CmsService } from '../../shared/services/cms.service';
import { Subscription } from 'rxjs';
import { Services } from '../../../domain/services';
import { Faq } from '../../../domain/faq';
import { HeroSlider } from '../../../domain/heroSlider';
import { Brands } from '../../../domain/brands';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollingSection') scrollingSection: ElementRef = new ElementRef(null);

  public services: Services[] = [];
  public faqs: Faq[] = [];
  public sliderData: HeroSlider[] = [];
  public brands: Brands[] = [];

  #subscriptions: Subscription[] = [];

  constructor(private cms: CmsService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollingSection.nativeElement.scrollLeft = scrollOffset;
  }

  ngOnInit(): void {
    this.#subscriptions.push(
      this.cms.services$.subscribe((s) => {
        this.services = s;
      }),
      this.cms.faqs$.subscribe((f) => {
        this.faqs = f;
      }),
      this.cms.heroSliders$.subscribe((s) => {
        this.sliderData = s;
      }),
      this.cms.brands$.subscribe((b) => {
        console.log(b);
        this.brands = b;
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
