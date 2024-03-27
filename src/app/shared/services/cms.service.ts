import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environment/environment';
import { Faq } from '../../../domain/faq';
import { Page } from '../../../domain/pages';
import { HeroSlider } from '../../../domain/heroSlider';
import { Info } from '../../../domain/info';
import { Services } from '../../../domain/services';
import { Brands } from '../../../domain/brands';
// @ts-ignore
import { ClientConfig, SanityClient, createClient } from '@sanity/client';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  #dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.#dataSubject.asObservable();

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

  #clientConfig: ClientConfig = {
    projectId: environment.sanity.projectId,
    dataset: environment.sanity.dataset,
    apiVersion: environment.sanity.apiVersion,
    useCdn: environment.sanity.useCdn,
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
    this.#brandsSubject.next(data.filter((i: any) => i._type === 'brands'));
    this.#pagesSubject.next(data.filter((i: any) => i._type === 'pages'));
    this.#faqsSubject.next(data.filter((i: any) => i._type === 'faq'));
    this.#heroSlidersSubject.next(data.filter((i: any) => i._type === 'heroSlider'));
    this.#infoSubject.next(data.filter((i: any) => i._type === 'info'));
    this.#servicesSubject.next(data.filter((i: any) => i._type === 'services'));
  }
}
