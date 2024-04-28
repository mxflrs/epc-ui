import { Component, OnInit, signal } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  public showSidebar = signal(true);

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.showSidebar.set(this.sidebarService.show);
  }

  handleShowSidebar() {
    this.sidebarService.onShowSidebar(!this.showSidebar());
  }
}
