import { Component } from '@angular/core';
import { CmsService } from './shared/services/cms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cmsSrvice: CmsService){
    this.cmsSrvice.getData();
  }
}
