import { Component, Input } from '@angular/core';
import { Brands } from '../../../../../domain/brands';
import { ImageBuilderService } from '../../../../shared/services/image-builder.service';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss'
})
export class MarcasComponent {
  @Input() brands: Brands[] = [];

  constructor(private imageBuilder: ImageBuilderService) {}

  imageUrl(id: string) {
    return this.imageBuilder.image(id).url();
  }
}
