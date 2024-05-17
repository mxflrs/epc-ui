import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { Subscription } from 'rxjs';
import { Page } from '../../../../domain/pages';
import { SidebarService } from '../../services/sidebar.service';
import { ModalsService } from 'src/app/shared/services/modals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  #subscriptions: Subscription;
  public pages = signal<Page[]>([]);

  constructor(private cms: CmsService, private sidebarService: SidebarService, private modalService: ModalsService) {
    this.#subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.#subscriptions = this.cms.pages$.subscribe((p) => {
      this.pages.set(p);
    });
  }

  navigateTo(slug: string) {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView();
    }

    if (slug === 'contacto') {
      this.modalService.toggleContactModal();
    }
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }

  onOpenSidebar() {
    this.sidebarService.toggleSidebar();
  }

  onOpenContactModal() {
    this.modalService.toggleContactModal();
  }
}
