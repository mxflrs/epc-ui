import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { Info } from '../../../../domain/info';
import { Page } from '../../../../domain/pages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  info: Info[] = [];
  pages: Page[] = [];
  hoveredItem = 0;
  #cms = inject(CmsService);
  #subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.#subscriptions.push(
      this.#cms.info$.subscribe((info) => {
        this.info = info;
      }),
      this.#cms.pages$.subscribe((pages) => {
        this.pages = pages;
      })
    );
  }

  goTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
