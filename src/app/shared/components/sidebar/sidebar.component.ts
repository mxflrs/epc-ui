import { Component, OnChanges, OnInit, signal } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { fadeAnimation, slideInAnimation } from '../../animations/animations';
import { CmsService } from '../../services/cms.service';
import { Services } from '../../../../domain/services';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [slideInAnimation]
})
export class SidebarComponent implements OnInit {
  public openSidebar = true;
  public services: Services[] = [];
  public selectedServiceId: string | undefined = '';

  constructor(private sidebarService: SidebarService, private cms: CmsService) {
    this.sidebarService.showSidebar.subscribe({
      next: (show) => {
        this.openSidebar = show;
      }
    })
  }

  ngOnInit(): void {
    this.cms.services$.subscribe((s) => {
      this.services = s;
    });
  }

  onOpenSidebar() {
    this.sidebarService.toggleSidebar();
    this.selectedServiceId = '';
  }
}
