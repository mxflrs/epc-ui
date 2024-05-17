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
  public selectedColumn: string | null = null;

  onColumnClick(id: string | undefined) {
    if (this.selectedColumn === id) {
      this.selectedColumn = null;
    } else if (id) {
      this.selectedColumn = id;
      setTimeout(() => {
        this.scrollToSelectedCell(id);
      });
    }
  }

  scrollToSelectedCell(cellId: string): void {
    const cellElement = document.getElementById(cellId);
    if (cellElement) {
      cellElement.scrollIntoView();
    }
  }

}
