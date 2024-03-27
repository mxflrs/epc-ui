import { Component, OnInit, signal } from '@angular/core';
import { CmsService } from '../../shared/services/cms.service';
import { Subscription } from 'rxjs';
import { Services } from '../../../domain/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public services: Services[] = [];
  public faqs: any[] = [];
  #subscriptions: Subscription[] = [];

  constructor(private cms: CmsService) {}

  ngOnInit(): void {
    this.#subscriptions.push(
      this.cms.services$.subscribe((services) => {
        this.services = services;
      }),
      this.cms.faqs$.subscribe((faqs) => {
        this.faqs = faqs;
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
