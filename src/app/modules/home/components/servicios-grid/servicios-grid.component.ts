import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { Services } from '../../../../../domain/services';

@Component({
  selector: 'app-servicios-grid',
  standalone: true,
  imports: [],
  templateUrl: './servicios-grid.component.html',
  styleUrl: './servicios-grid.component.scss',
})
export class ServiciosGridComponent {
  @ViewChildren('card') cellElements!: QueryList<ElementRef>;
  @Input() services: Services[] = [];
  public selectedService: Services | null = null;


  onColumnClick(service: Services) {
    this.selectedService = service;
  }

  scrollToSelectedCell(cellId: string): void {
    const cellElement = document.getElementById(cellId);
    if (cellElement) {
      cellElement.scrollIntoView();
    }
  }

  closeContactModal(): void {
    this.selectedService = null;
  }
}
