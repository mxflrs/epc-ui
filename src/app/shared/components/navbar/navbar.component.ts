import { Component, OnInit, signal } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { Subscription } from 'rxjs';
import { Page } from '../../../../domain/pages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  #subscriptions: Subscription;
  public pages = signal<Page[]>([]);

  constructor(private cms: CmsService) {
    this.#subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.#subscriptions = this.cms.pages$.subscribe((p) => {
      this.pages.set(p);
    });
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
