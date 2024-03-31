import { Component, Input } from '@angular/core';
import { Services } from '../../../../../domain/services';

@Component({
  selector: 'app-servicios-grid',
  standalone: true,
  imports: [],
  templateUrl: './servicios-grid.component.html',
  styleUrl: './servicios-grid.component.scss',
})
export class ServiciosGridComponent {
  @Input() services: Services[] = [];
}
