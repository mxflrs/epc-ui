import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { Info } from '../../../../domain/info';
import { Page } from '../../../../domain/pages';
import { Subscription } from 'rxjs';
import { ModalsService } from 'src/app/shared/services/modals.service';

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
  #modalService = inject(ModalsService);

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

  navigateTo(slug: string) {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView();
    }

    if (slug === 'contacto') {
      this.#modalService.toggleContactModal();
    }
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
