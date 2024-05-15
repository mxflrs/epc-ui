import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Faq } from '../../../domain/faq';
import { Page } from '../../../domain/pages';
import { HeroSlider } from '../../../domain/heroSlider';
import { Info } from '../../../domain/info';
import { Services } from '../../../domain/services';
import { Brands } from '../../../domain/brands';
import { Any, ClientConfig, SanityClient, createClient } from '@sanity/client';
import { DataType } from '../../../domain/dataType'
import environment from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
    #dataSubject = new BehaviorSubject<Any>([]);

    #faqsSubject = new BehaviorSubject<Faq[]>([]);
    faqs$ = this.#faqsSubject.asObservable();

    #pagesSubject = new BehaviorSubject<Page[]>([]);
    pages$ = this.#pagesSubject.asObservable();

    #heroSlidersSubject = new BehaviorSubject<HeroSlider[]>([]);
    heroSliders$ = this.#heroSlidersSubject.asObservable();

    #infoSubject = new BehaviorSubject<Info[]>([]);
    info$ = this.#infoSubject.asObservable();

  #servicesSubject = new BehaviorSubject<Services[]>([]);
  services$ = this.#servicesSubject.asObservable();

  #brandsSubject = new BehaviorSubject<Brands[]>([]);
  brands$ = this.#brandsSubject.asObservable();

  // * SANITY CONFIG

  #clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset
  };

  #sanityClient(): SanityClient {
    return createClient(this.#clientConfig);
  }

  async getData(): Promise<void> {
    try {
      const res = await this.#sanityClient().fetch('*');
      this.#dataSubject.next(res);
      this.populateData();
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  populateData() {
    const data = this.#dataSubject.getValue();
    this.populateSubject(this.#brandsSubject, 'brands', data);
    this.populateSubject(this.#pagesSubject, 'pages', data);
    this.populateSubject(this.#faqsSubject, 'faq', data);
    this.populateSubject(this.#heroSlidersSubject, 'heroSlider', data);
    this.populateSubject(this.#infoSubject, 'info', data);
    this.populateSubject(this.#servicesSubject, 'services', data);
  }

  populateSubject(subject: BehaviorSubject<Any>, type: string, data: DataType[]) {
    subject.next(data.filter((i: DataType) => i._type === type));
  }
}
