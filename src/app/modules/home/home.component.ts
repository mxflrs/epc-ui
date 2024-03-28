import { Component, OnInit, signal } from '@angular/core';
import { CmsService } from '../../shared/services/cms.service';
import { Subscription } from 'rxjs';
import { Services } from '../../../domain/services';
import { Faq } from '../../../domain/faq';
import { HeroSlider } from '../../../domain/heroSlider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public services: Services[] = [];
  public faqs: Faq[] = [];
  public sliderData: HeroSlider[] = [];
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
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
