import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('scrollingSection') scrollingSection: ElementRef = new ElementRef(null);
  public services: Services[] = [];
  public faqs: Faq[] = [];
  public sliderData: HeroSlider[] = [];
  public brands: Brands[] = [];
  #subscriptions: Subscription[] = [];

  constructor(private cms: CmsService) {}

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
        this.brands = b;
      })
    );
  }

  onColumnClick(index: number) {
    console.log('Column clicked', index);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.scrollingSection && this.scrollingSection.nativeElement) {
      this.scrollingSection.nativeElement.scrollLeft = scrollOffset;
    }
  }
  ngOnDestroy(): void {
    this.#subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
