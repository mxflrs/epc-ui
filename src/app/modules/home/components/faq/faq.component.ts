import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { Faq } from '../../../../../domain/faq';
import { Services } from '../../../../../domain/services';
import { NgClass } from '@angular/common';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit, OnDestroy {
  @Input() faqs: Faq[] = [];
  @Input() services: Services[] = [];
  public currentFaq = signal(0);
  public lastFaq = signal(0);
  private faqIntervalSubscription: Subscription | undefined;
  public isPaused = false;

  constructor() {}

  ngOnInit(): void {
      this.startFaqInterval();
  }

  startFaqInterval() {
    this.faqIntervalSubscription = interval(5000).subscribe(() => {
      if (!this.isPaused) {
        this.moveToNextFaq();
      }
    });
  }

  pauseFaqInterval() {
    this.isPaused = true;
  }

  resumeFaqInterval() {
    this.isPaused = false;
  }

  get currentService() {
    const current = this.services.find(
      (s) => s._id === this.faqs[this.currentFaq()].category._ref
    );
    return current?.parentService;
  }

  moveToFaq(i: number) {
    this.currentFaq.set(i);
  }

  moveToNextFaq() {
    this.currentFaq.set((this.currentFaq() + 1) % this.faqs.length);
  }

  ngOnDestroy(): void {
    if (this.faqIntervalSubscription) {
      this.faqIntervalSubscription.unsubscribe();
    }
  }
}
