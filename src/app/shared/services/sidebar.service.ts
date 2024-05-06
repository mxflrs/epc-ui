import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  #showSidebar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly showSidebar: Observable<boolean> = this.#showSidebar.asObservable();

  toggleSidebar() {
    this.#showSidebar.next(!this.#showSidebar.value);
  }
}
