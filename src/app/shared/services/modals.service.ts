import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  #showContactModal: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly showContactModal: Observable<boolean> = this.#showContactModal.asObservable();
  constructor() { }

  toggleContactModal() {
    this.#showContactModal.next(!this.#showContactModal.value);
  }
}
