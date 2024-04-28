import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  show = false;

  constructor() { }

  onShowSidebar(show: boolean) {
    this.show = show;
  }
}
