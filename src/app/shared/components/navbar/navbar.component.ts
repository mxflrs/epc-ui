import { Component, OnInit, signal } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { Subscription } from 'rxjs';
import { Page } from '../../../../domain/pages';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  #subscriptions: Subscription;
  public pages = signal<Page[]>([]);

  constructor(private cms: CmsService, private sidebarService: SidebarService) {
    this.#subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.#subscriptions = this.cms.pages$.subscribe((p) => {
      this.pages.set(p);
    });
  }

  navigateToPage() {

  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }

  onOpenSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
