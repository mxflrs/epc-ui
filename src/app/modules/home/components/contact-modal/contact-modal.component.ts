import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CmsService } from 'src/app/shared/services/cms.service';
import { ModalsService } from 'src/app/shared/services/modals.service';
import { Info } from 'src/domain/info';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent implements OnInit {
  info: Info[] = [];
  #cms = inject(CmsService);
  #modalServices = inject(ModalsService);
  public openContactModal = true;

  ngOnInit(): void {
    this.#cms.info$.subscribe((info) => {
      this.info = info;
    });

    this.#modalServices.showContactModal.subscribe({
      next: (show) => {
        this.openContactModal = show;
      }
    });
  }

  closeContactModal(): void {
    this.#modalServices.toggleContactModal();
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeContactModal();
    }
  }
}
