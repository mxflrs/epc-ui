import { Component, Input, OnInit, signal } from '@angular/core';
import { Faq } from '../../../../../domain/faq';
import { Services } from '../../../../../domain/services';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  @Input() faqs: Faq[] = [];
  @Input() services: Services[] = [];
  public currentFaq = signal(0);
  public lastFaq = signal(0);

  constructor() {}

  ngOnInit(): void {
    if (this.faqs.length > 0) {
      this.lastFaq.update(() => this.faqs.length - 1);
    }
  }

  get currentService() {
    const current = this.services.find((s) => s._id === this.faqs[this.currentFaq()].category._ref);
    return current?.parentService;
  }

  // nextFaq() {
  //   if (this.currentFaq() === this.lastFaq()) {
  //     this.currentFaq.set(0);
  //   } else {
  //     this.currentFaq.update((value) => value + 1);
  //   }
  // }

  // prevFaq() {
  //   if (this.currentFaq() === 0) {
  //     this.currentFaq.set(this.faqs.length - 1);
  //   } else {
  //     this.currentFaq.update((value) => value - 1);
  //   }
  // }

  moveToFaq(i: number) {
    this.currentFaq.set(i);
  }
}
