import { Component, Input, OnChanges, OnInit, signal } from '@angular/core';
import { Faq } from '../../../../../domain/faq';
import { Services } from '../../../../../domain/services';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  @Input() faqs: Faq[] = [];
  @Input() services: Services[] = [];
  public currentFaq = signal(0);
  public lastFaq = signal(0);

  constructor() {  }

  ngOnInit(): void {
    if (this.faqs.length > 0) {
      this.lastFaq.update(() => this.faqs.length - 1);
    }
  }

  nextFaq() {
    if (this.currentFaq() === this.lastFaq()) {
      this.currentFaq.set(0);
    } else {
      this.currentFaq.update((value) => value + 1);
    }
  }

  prevFaq() {
    if (this.currentFaq() === 0) {
      this.currentFaq.set(this.faqs.length - 1);
    } else {
      this.currentFaq.update((value) => value - 1);
    }
  }
}
