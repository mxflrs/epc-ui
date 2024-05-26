import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Services } from '../../../../../domain/services';
import { CommonModule } from '@angular/common';
import { ImageBuilderService } from 'src/app/shared/services/image-builder.service';

@Component({
  selector: 'app-servicios-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-grid.component.html',
  styleUrl: './servicios-grid.component.scss',
})
export class ServiciosGridComponent {
  @ViewChildren('card') cellElements!: QueryList<ElementRef>;

  @Input() services: Services[] = [];
  public selectedService: Services | null = null;
  public nextService: Services | null = null;
  public prevService: Services | null = null;
  public currentIndex: number = -1;
  #imageBuilder = inject(ImageBuilderService);

  onColumnClick(index: number) {
    this.selectedService = this.services[index];
    this.nextService = index + 1 !== this.services.length ? this.services[index + 1] : this.services[0];
    this.prevService = index === 0 ? this.services[this.services.length - 1] : this.services[index - 1];
    this.currentIndex = index;
  }

  imageUrl(id: string) {
    return this.#imageBuilder.image(id).url();
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

  onNextService() {
    this.selectedService = this.nextService;
    const nextIndex = this.currentIndex + 1 !== this.services.length ? this.currentIndex + 1 : 0;
    this.onColumnClick(nextIndex);
  }

  onPrevService() {
    this.selectedService = this.prevService;
    const prevIndex = this.currentIndex === 0 ? this.services.length - 1 : this.currentIndex - 1;
    this.onColumnClick(prevIndex);
  }

  setCurrentIndex(index?: number) {
    this.currentIndex = index ? index : -1;
  }

  @HostListener('document:keydown.escape') onKeydownHandler() {
    if (this.selectedService) {
      this.selectedService = null;
    }
  }
}
