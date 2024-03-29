import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageBuilderService {
  private projectId: string;
  private dataset: string;
  private imageId: string = '';

  constructor() {
    this.projectId = environment.sanity.projectId;
    this.dataset = environment.sanity.dataset;
  }

  image(imageId: string) {
    this.imageId = imageId;
    return this;
  }

  url() {
    const base = `https://cdn.sanity.io/images/${this.projectId}/${this.dataset}/`;
    const id = this.imageId.split('-').slice(1, -1);
    let shortId = id.join('-');
    return `${base}${shortId}.jpg`;
  }
}
