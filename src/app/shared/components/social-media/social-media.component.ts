import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CmsService } from 'src/app/shared/services/cms.service';
import { Info } from 'src/domain/info';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent implements OnInit, OnDestroy {
  #cmsService = inject(CmsService);
  #subscriptions: Subscription[] = [];
  info: Info[] = [];

  ngOnInit(): void {
    this.#subscriptions.push(
      this.#cmsService.info$.subscribe((info) => {
        this.info = info;
      })
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
